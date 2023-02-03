import axios from 'axios'
import { xSignature } from '../../helpers/signature-generator'
import { cleanHotels, setFullLList, setHotels, setHotelsCodes, startLoading } from "../slices/hotels_slice"


export const getHotelsCityList = (destinationCode) => {
    return async(dispatch, getState) => {

        dispatch(startLoading())
         
        const params = {
            destinationCode 
        }

        const config = {
            url: 'http://localhost:4000/api/hotels/filter/',
            params,
            headers: { "Content-Type": "application/json" }
        }

        const { data } = await axios(config)
        
        let codes = []
        data.hotels.map(hotel => (
            codes.push(hotel.code)
        ))

        dispatch( setHotelsCodes(codes) )
    }
}

export const getFullList = (query) => {
    return async (dispatch, getState) => {

        dispatch(startLoading())

        // TODO: Make Fetch
        const params = {
            text: query,
            // fields: 'city coordinates destinationCode ' 
        }

        const configHotels = {
            url: 'http://localhost:4000/api/hotels/filter/',
            params,
            headers: { "Content-Type": "application/json" }
        }

        const configDest = {
            url: 'http://localhost:4000/api/destinations/filter/',
            params: { text: query },
            headers: { "Content-Type": "application/json" }
        }

        const { data: dataDest } = await axios(configDest)
        const { data: datahotels } = await axios(configHotels)
        
        const fullList = dataDest.destinations.concat(datahotels.hotels)

        dispatch(setFullLList(fullList))
    }
}

export const getAvailability = () => {
    return async (dispatch, getState) => {
        dispatch(startLoading()) 
        dispatch(cleanHotels())

        const codes = []
        const hotels = []
        
        const configAvailable = {
            method: 'post',
            url: `/hotel-api/1.0/hotels`,
            headers: {
                'Api-key': process.env.REACT_APP_API_KEY,
                'X-Signature': xSignature(),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: getState().hotels.booking
        }

        const configHotelsDetails = {
            url: 'http://localhost:4000/api/hotels/details/',
            params: {
                codes
            },
            headers: { "Content-Type": "application/json" }
        }

        const {data} = await axios(configAvailable)

        data.hotels.hotels.map(hotel => (
            codes.push(hotel.code)
        ))

        const { data: dataDetails } = await axios(configHotelsDetails)

        data.hotels.hotels.map((hotel, index) => (
            hotels.push({
                ...hotel,
                details: dataDetails.hotels[index]
            })
        ))
        

        dispatch(setHotels(hotels))
    }
}
import axios from 'axios'
import { cleanHotels, setFullLList, setHotels, setHotelsCodes, startLoading } from "../slices/hotels_slice"
import { orderHotelList } from '../../helpers/orderHotelList'


export const getHotelsCityList = (destinationCode) => {
    return async(dispatch, getState) => {

        dispatch(startLoading())
         
        const params = {
            destinationCode 
        }

        const config = {
            url: `${process.env.REACT_APP_API_URL}/hotels/filter/`, 
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

        const params = {
            text: query,
            fields: 'images categoryCode zoneCode'   
        }

        const configHotels = {
            url: `${process.env.REACT_APP_API_URL}/hotels/filter/`,
            params,
            headers: { "Content-Type": "application/json" }
        }

        const configDest = {
            url: `${process.env.REACT_APP_API_URL}/destinations/filter/`,
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

        const hotelCode = getState().hotels.selected.code
        const codes = []
        let hotels = []
        
        const configAvailable = {
            method: 'post',
            url: `${process.env.REACT_APP_API_URL}/booking/availability`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: getState().hotels.booking
        }

        const {data} = await axios(configAvailable)

        data.hotels.hotels.map(hotel => (
            codes.push(hotel.code)
        ))


        const configHotelsDetails = {
            url: `${process.env.REACT_APP_API_URL}/hotels/details/`,
            params: {
                codes
            },
            headers: { "Content-Type": "application/json" }
        }


        const { data: dataDetails } = await axios(configHotelsDetails)

        data.hotels.hotels.map((hotel, index) => (
            hotels.push({
                ...hotel,
                details: dataDetails.hotels[index]
            })
        ))


        // Sort hotel list
        hotels = orderHotelList(hotels, hotelCode, getState().hotels.selected)
        
        dispatch(setHotels(hotels))
    }
}
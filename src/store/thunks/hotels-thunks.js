import axios from 'axios'
import { setFullLList, setHotels, startLoading } from "../slices/hotels_slice"



export const getHotelsList = (query) => {
    return async(dispatch, getState) => {

        dispatch(startLoading())
         
        const params = {
            text: query 
        }

        const config = {
            url: 'http://localhost:4000/api/hotels/filter/',
            params,
            headers: { "Content-Type": "application/json" }
        }

        const { data } = await axios(config)
        console.log(data)

        dispatch( setHotels(data.hotels) )
    }
}

export const getFullList = (query) => {
    return async (dispatch, getState) => {

        dispatch(startLoading())

        // TODO: Make Fetch
        const params = {
            text: query,
            fields: 'city' 
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
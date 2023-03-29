import axios from 'axios'
import { xSignature } from '../../helpers/signature-generator'
import { endLoading, startLoading } from "../slices/hotels_slice"
import { setHotel } from '../slices/booking-slice'


export const checkRate = (rate) => {
    return async (dispatch, getState) => {
        dispatch(startLoading())

        const configAvailable = {
            method: 'post',
            url: `http://localhost:4000/api/booking/checkrates`,
            headers: {
                'Api-key': process.env.REACT_APP_API_KEY,
                'X-Signature': xSignature(),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: rate
        }

        const { data } = await axios(configAvailable)
        
        dispatch(setHotel(data.hotel))
        dispatch(endLoading())
    }    

}


export const BookingConfirmation = () => {
    return async (dispatch, getState) => {
        dispatch(startLoading())

        const config = {
            method: 'post',
            url: `http://localhost:4000/api/booking/confirmation/`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: getState().booking.book
        }

        const { data } = await axios(config)

        console.log(data)
        dispatch(endLoading())
    }

}
import axios from 'axios'
import { xSignature } from '../../helpers/signature-generator'
import { endLoading, startLoading } from "../slices/hotels_slice"
import { setHotel } from '../slices/booking-slice'


export const checkRate = (rate) => {
    return async (dispatch, getState) => {
        dispatch(startLoading())

        const configAvailable = {
            method: 'post',
            url: `/hotel-api/1.0/checkrates`, //https://api.test.hotelbeds.com add or delete
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
        const booking = getState().booking.book
        delete booking.paymentData

        const configAvailable = {
            method: 'post',
            url: `/hotel-api/1.0/bookings`,  //https://api-secure.test.hotelbeds.com add or delete
            headers: {
                'Api-key': process.env.REACT_APP_API_KEY,
                'X-Signature': xSignature(),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: booking
        }

        const { data } = await axios(configAvailable)

        console.log(data)
        dispatch(endLoading())
    }

}
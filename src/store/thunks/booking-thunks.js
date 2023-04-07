import axios from 'axios'
import { endLoading, startLoading } from "../slices/hotels_slice"
import { endCheckingPayment, setConfirmation, setHotel, startCheckingPayment } from '../slices/booking-slice'
import { createBooking } from '../../appwrite/providers'


export const checkRate = (rate) => {
    return async (dispatch, getState) => {
        dispatch(startLoading())

        const configAvailable = {
            method: 'post',
            url: `${process.env.REACT_APP_API_URL}/booking/checkrates`,
            headers: {
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
        dispatch(startCheckingPayment())

        const config = {
            method: 'post',
            url: `${process.env.REACT_APP_API_URL}/booking/confirmation/`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: getState().booking.book
        }

        const { data } = await axios(config)

        dispatch(setConfirmation(data.booking))
        dispatch(endCheckingPayment())
    }

}

export const startCreateBooking = () => {
    return async (dispatch, getState) => {

        const uid = getState().auth.uid
        const booking_id = getState().booking.confirmation.reference
        const hotel_code = getState().booking.confirmation.hotel.code

        // dispatch(startCheckingPayment())

        const resp = await createBooking({uid, hotel_code, booking_id})

        console.log(resp)
        // if (!resp.ok) return dispatch(logout(resp.errorMessage))

        // dispatch(login({ ...resp, name: null }))
    }
} 
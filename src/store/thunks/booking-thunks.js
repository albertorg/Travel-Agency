import axios from 'axios'
import { endLoading, startLoading } from "../slices/hotels_slice"
import { endCheckingPayment, setConfirmation, setHotel, setUserBookings, startCheckingPayment } from '../slices/booking-slice'
import { createBooking, getbookingsOfUser } from '../../appwrite/providers'
import { orderImages } from '../../helpers/order-images'


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
    }
}

export const startCreateBooking = () => {
    return async (dispatch, getState) => {

        const uid = getState().auth.uid
        const booking_id = getState().booking.confirmation.reference
        const { checkOut, checkIn, name } = getState().booking.confirmation.hotel
        const persons = JSON.parse(localStorage.getItem('booking'))
        const hotel = JSON.parse(localStorage.getItem('hotel'))

        const image = orderImages(hotel, 1)[0]
        console.log(image.path)
        await createBooking(uid, booking_id, checkIn, checkOut, name, persons.total, image.path )

        dispatch(endCheckingPayment())
    }
} 

export const startGetingBoookingsOfUser = () => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid

        const resp = await getbookingsOfUser(uid)
        
        if (resp.ok === true) dispatch(setUserBookings(resp.resp.documents))
    }
}
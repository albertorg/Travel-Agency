import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    oldBooking: {},
    rateK: '',
    hotel: {},
    book: {
        holder: {},
        paymentData: {},
        rooms: []
    }
}

export const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        setBookingState: (state, { payload }) => {
            state.oldBooking = payload.booking
            state.rateK = payload.rateKey
        },
        setHotel: (state, {payload}) => {
            state.hotel = payload
        },
        setholderBook: (state, {payload}) => {
            state.book.holder = {
                name: payload.name,
                surname: payload.surname
            } 
            state.book.paymentData = {
                contactData: {
                    email: payload.email,
                    phoneNumber: payload.phone
                }
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    setBookingState,
    setHotel, 
    setholderBook,
} = bookingSlice.actions
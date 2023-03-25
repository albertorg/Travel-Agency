import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    oldBooking: {},
    rateK: '',
    hotel: {}
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
    }
})

// Action creators are generated for each case reducer function
export const {
    setBookingState,
    setHotel
} = bookingSlice.actions
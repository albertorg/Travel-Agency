import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/auth-slice'
import { hotelsSlice } from './slices/hotels_slice'
import { mapSlice } from './slices/map-slice'
import { bookingSlice } from './slices/booking-slice'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        hotels: hotelsSlice.reducer,
        booking: bookingSlice.reducer,
        map: mapSlice.reducer

    },
})
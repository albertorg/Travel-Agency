import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/auth-slice'
import { hotelsSlice } from './slices/hotels_slice'
import { mapSlice } from './slices/map-slice'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        hotels: hotelsSlice.reducer,
        map: mapSlice.reducer
    },
})
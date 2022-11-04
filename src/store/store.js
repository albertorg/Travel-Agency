import { configureStore } from '@reduxjs/toolkit'
import { hotelsSlice } from './slices/hotels_slice'

export const store = configureStore({
    reducer: {
        hotels: hotelsSlice.reducer
    },
})
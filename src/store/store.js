import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/auth-slice'
import { hotelsSlice } from './slices/hotels_slice'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        hotels: hotelsSlice.reducer
        
    },
})
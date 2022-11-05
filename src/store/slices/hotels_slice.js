import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    selected: {},
    hotels: [],
}

export const hotelsSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {
        startLoadingHotels: (state) => {
            state.isLoading = true
        },
        setHotels: (state, action) => {
            console.log(action)
        },
        setSelected: (state, action) => {
            console.log(action)
        }
    },
})

// Action creators are generated for each case reducer function
export const { 
    startLoadingHotels,
    setHotels,
    setSelected
    
 } = hotelsSlice.actions


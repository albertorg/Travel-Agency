import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    selected: {},
    hotels: [],
    fullList: {},
    hotelsDetails: []
}

export const hotelsSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true
        },
        setHotels: (state, { payload }) => {
            state.hotels = payload
            state.isLoading = false
        },
        setSelected: (state, { payload }) => {
            state.selected = payload
        },
        setFullLList: (state, { payload }) => {
            state.fullList = payload
            state.isLoading = false
        }
    },
})

// Action creators are generated for each case reducer function
export const { 
    startLoading,
    setHotels,
    setSelected,
    setFullLList
    
 } = hotelsSlice.actions


import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    selected: {},
    hotels: [],
    fullList: {},
    hotelsDetails: [],
    booking: {
        stay: {
            checkIn: '',
            checkOut: ''
        },
        occupancies: [
            {
                rooms: 1,
                adults: 1,
                children: 0
            }
        ],
        hotels: {
            hotel: []
        },
        total: 1
    }
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
        },
        setAdults: ({ booking }, { payload }) => {
            booking.occupancies[payload.index].adults += payload.value
            booking.total += payload.value
        },
        setChildren: ({ booking }, { payload }) => {
            booking.occupancies[payload.index].children += payload.value
            booking.total += payload.value
        },
        addRoom: ({ booking }) => {
            booking.occupancies.push({
                rooms: 1,
                adults: 1,
                children: 0
            })
            booking.total += 1 
        },
        deleteRoom: ({ booking }, { payload }) => {
            booking.occupancies.splice(payload.index, 1)
            booking.total -= payload.value 
        },
    },
})

// Action creators are generated for each case reducer function
export const { 
    startLoading,
    setHotels,
    setSelected,
    setFullLList,
    setAdults,
    setChildren,
    addRoom,
    deleteRoom
    
 } = hotelsSlice.actions


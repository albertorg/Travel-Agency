import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    selected: {},
    hotels: [],
    fullList: [],
    booking: {
        stay: {
            checkIn: '',
            checkOut: ''
        },
        occupancies: [
            {
                rooms: 1,
                adults: 2,
                children: 0,
                paxes: []
            }
        ],
        hotels: {
            hotel: []
        },
        total: 2
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
        cleanHotels: (state) => {
            state.hotels = []
        },
        setSelected: (state, { payload }) => {
            state.selected = payload
        },
        setFullLList: (state, { payload }) => {
            state.fullList = payload
            state.isLoading = false
        },
        setHotelsCodes: (state, { payload }) => {
            state.booking.hotels.hotel = payload
            state.isLoading = false
        },
        setDates: ({ booking }, { payload }) => {
            booking.stay = payload.stay
        },
        setAdults: ({ booking }, { payload }) => {
            booking.occupancies[payload.index].adults += payload.value
            booking.total += payload.value
        },
        setChildren: ({ booking }, { payload }) => {
            booking.occupancies[payload.index].children += payload.value
            booking.total += payload.value
            booking.occupancies[payload.index].paxes.push({
                type: 'CH',
                age: payload.age
            })
        },
        removeChild: ({ booking }, { payload }) => {
            booking.occupancies[payload.index].paxes.splice(payload.indexChild, 1)
            booking.total -= 1
            booking.occupancies[payload.index].children -= 1 
        },
        addRoom: ({ booking }) => {
            booking.occupancies.push({
                rooms: 1,
                adults: 1,
                children: 0,
                paxes: []
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
    cleanHotels,
    setSelected,
    setFullLList,
    setHotelsCodes,
    setAdults,
    setChildren,
    removeChild,
    addRoom,
    deleteRoom, 
    setDates
    
 } = hotelsSlice.actions


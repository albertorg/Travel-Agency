import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    indexCardHover: null
}

export const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        setIndexCard: (state, {payload}) => {
            state.indexCardHover = payload
        },
        
    }
})

// Action creators are generated for each case reducer function
export const {
    setIndexCard
} = mapSlice.actions
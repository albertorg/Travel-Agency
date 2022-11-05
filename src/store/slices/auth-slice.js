import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    email: '',
    photoUrl: null    
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            console.log(action)
        },
        register: (state, action) => {
            console.log(action)
        },
        logout: (state, action) => {
            console.log(action)
        },
    }
})

// Action creators are generated for each case reducer function
export const { 
    login,
    register,
    logout
 } = authSlice.actions
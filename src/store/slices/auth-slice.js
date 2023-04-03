import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: 'not-authenticated',         // 'checking', 'authenticated', 'not-authenticated'
    uid: null,
    name: null,
    email: null,
    photoUrl: null,
    error: null    
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
        checkingCredentials: (state) => {
            state.status = 'checking'
        }
    }
})

// Action creators are generated for each case reducer function
export const { 
    login,
    register,
    logout,
    checkingCredentials
 } = authSlice.actions
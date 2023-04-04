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
        login: (state, { payload }) => {
            state.status = 'authenticated'
            state.uid = payload.id
            state.name = payload.name
            state.email = payload.email
            state.error = null
        },
        register: (state, { payload }) => {
            state.status = 'authenticated'
            state.uid = payload.id
            state.email = payload.email
            state.error = null
        },
        logout: (state) => {
            state.status = 'not-authenticated'    
            state.uid = null
            state.name = null
            state.email = null
            state.photoUrl = null
            state.error = null 
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
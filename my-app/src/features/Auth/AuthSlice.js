
import { createSlice } from '@reduxjs/toolkit'

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        authLoading: true,
        isAuthenticate: false,
        user: null
    },
    reducers: {
        login: (state, action) => {

        },
        register: (state, aciton) => {

        },
    }
})


export default AuthSlice.reducer
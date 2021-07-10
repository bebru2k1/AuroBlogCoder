import { createSlice } from '@reduxjs/toolkit'

const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        authLoading: true,
        isAuthenticate: false,
        user: null
    }

})
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from '../../configs/axiosConfig';
import axios from '../../configs/axiosConfig'
import setAuthToken from '../../configs/setAuthToken'

//Reducer Thunk

export const login = createAsyncThunk('auth/authLogin', async (dataForm, thunkApi) => {
    const response = await axios.post('auth/sigin', dataForm)
    console.log(response.data)
    if (response.status === 200) {
        localStorage.setItem('aurBlog-acc', response.data.accessToken)
        setAuthToken(response.data.accessToken)
        return response.data
    } else {
        return thunkApi.rejectWithValue(response.data)
    }

})

export const loginToken = createAsyncThunk('auth/siginToken', async ({ token }, { rejectWithValue }) => {
    try {
        const response = await axios.get('/auth/siginToken')
        if (response.status === 200) {
            setAuthToken(token)

            return response.data
        }
        else return rejectWithValue(response.data)

    } catch (error) {
        console.log(error)
        setAuthToken(null)
        rejectWithValue(error.response.data)
        localStorage.removeItem('aurBlog-acc')
    }


})

const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        authLoading: true,
        isAuthenticate: false,
        user: null
    },
    reducers: {}
    ,
    extraReducers: {
        [login.pending]: (state, action) => {
            Object.assign(state, { authLoading: true, isAuthenticate: false })
        },
        [login.fulfilled]: (state, { payload }) => {
            Object.assign(state, {
                authLoading: false,
                isAuthenticate: true,
                user: payload?.user
            })
        },
        [login.rejected]: (state, action) => {
            Object.assign(state, { authLoading: true, isAuthenticate: false, user: null })
        },
        // Login Token,
        [loginToken.pending]: (state, action) => {
            Object.assign(state, {
                authLoading: true,
                isAuthenticate: false
            })
        },
        [loginToken.fulfilled]: (state, { payload }) => {
            Object.assign(state, {
                authLoading: false,
                isAuthenticate: true,
                user: payload?.user
            })
        },
        [loginToken.rejected]: (state, action) => {
            Object.assign(state, { authLoading: true, isAuthenticate: false, user: null })
        },
    }
})
//Reducer
const authReducer = AuthSlice.reducer

//Selector
export const authSelector = state => state.auth


export const { loginSuccess, loginFail } = AuthSlice.actions

export default authReducer
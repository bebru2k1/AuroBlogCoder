import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../configs/axiosConfig";
export const getHomePost = createAsyncThunk('post/gethomepost', async (url, { rejectWithValue }) => {
    try {
        const response = await axios.get(url);
        if (response.status === 200) {
            return response.data
        } else {
            rejectWithValue(response.data)
        }
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})


export const getPosts = createAsyncThunk('post/gethomepost', async (url, { rejectWithValue }) => {
    try {
        const response = await axios.get(url);
        if (response.status === 200) {
            return response.data
        } else {
            rejectWithValue(response.data)
        }
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})


const PostSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
        postsHome: [],
        postsLoading: true
    },
    reducers: {

    },
    extraReducers: {
        [getHomePost.pending]: (state, { payload }) => {
            Object.assign(state, {
                postsLoading: true
            })
        },
        [getHomePost.fulfilled]: (state, { payload }) => {
            Object.assign(state, {
                postsLoading: false,
                postsHome: payload?.posts
            })
        },
        [getHomePost.rejected]: (state, { payload }) => {
            Object.assign(state, {
                postsLoading: false,
                postsHome: []
            })
        },

        //getPost
        [getPosts.pending]: (state, { payload }) => {
            Object.assign(state, {
                postsLoading: true
            })
        },
        [getPosts.fulfilled]: (state, { payload }) => {
            Object.assign(state, {
                postsLoading: false,
                posts: payload?.posts
            })
        },
        [getPosts.rejected]: (state, { payload }) => {
            Object.assign(state, {
                postsLoading: false,
                posts: []
            })
        }
    }
})
//Reducer
const postReducer = PostSlice.reducer
//Selector
export const postSelector = state => state.post
//actions

export default postReducer
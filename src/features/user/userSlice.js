import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';
import customFetch from "../../utils/axios";
import {addUserToLocalStorage, getUserToLocalStorage, removeUserToLocalStorage} from "../../utils/localStorage";

const initialState = {
    isLoading: false,
    isSidebarOpen: false,
    user: getUserToLocalStorage(),
};

export const registerUser = createAsyncThunk('user/registerUser',
    async (user, thunkAPI) => {
        try {
            const resp = await customFetch.post('/auth/register', user )
            return resp.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.msg)
        }
    }
);
export const loginUser = createAsyncThunk('user/loginUser',
    async (user, thunkAPI) => {
        try {
            const resp = await customFetch.post('/auth/login', user )
            return resp.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.msg)
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    // extraReducers: {
    //     [registerUser.pending]: (state) => {
    //         state.isLoading = true;
    //     },
    //     [registerUser.fulfilled]: (state, {payload}) => {
    //         state.isLoading = false
    //         state.user = payload.user
    //         addUserToLocalStorage(state.user)
    //         toast.success(`Hello there ${state.user.name}`)
    //     },
    //     [registerUser.rejected]: (state, {payload}) => {
    //         state.isLoading = false;
    //         toast.error(payload)
    //     },
    //     [loginUser.pending]: (state) => {
    //         state.isLoading = true;
    //     },
    //     [loginUser.fulfilled]: (state, {payload}) => {
    //         const {user} = payload;
    //         state.isLoading = false;
    //         state.user = user
    //         addUserToLocalStorage(user)
    //         toast.success(`Welcome Back ${user.name}`);
    //     },
    //     [loginUser.rejected]: (state, {payload}) => {
    //         state.isLoading = false;
    //         toast.error(payload)
    //     },
    // }
    reducers:  {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        logoutUser: (state) => {
            state.user = null;
            state.isSidebarOpen = false;
            removeUserToLocalStorage()
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                const { user } = payload;
                state.isLoading = false;
                state.user = user;
                addUserToLocalStorage(user);
                toast.success(`Hello There ${user.name}`);
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                toast.error(payload);
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                const { user } = payload;
                state.isLoading = false;
                state.user = user;
                addUserToLocalStorage(user);

                toast.success(`Welcome Back ${user.name}`);
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                toast.error(payload);
            })
    },
});

export const {toggleSidebar, logoutUser} = userSlice.actions
export default userSlice.reducer;
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';
import {addUserToLocalStorage, getUserToLocalStorage, removeUserToLocalStorage} from "../../utils/localStorage";
import {loginUserThunk, registerUserThunk, updateUserThunk} from "./ userThunk";

const initialState = {
    isLoading: false,
    isSidebarOpen: false,
    user: getUserToLocalStorage(),
};

export const registerUser = createAsyncThunk('user/registerUser',
    (user, thunkAPI) => {
        return registerUserThunk('/auth/register', user, thunkAPI)
    }
);
export const loginUser = createAsyncThunk('user/loginUser',
    (user, thunkAPI) => {
        return loginUserThunk('/auth/login', user, thunkAPI);
    }
);

export const updateUser = createAsyncThunk('user/updateUser',
    (user, thunkAPI) => {
        return updateUserThunk('/auth/updateUser', user, thunkAPI)
    }
)

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
    reducers: {
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
            .addCase(registerUser.fulfilled, (state, {payload}) => {
                const {user} = payload;
                state.isLoading = false;
                state.user = user;
                addUserToLocalStorage(user);
                toast.success(`Hello There ${user.name}`);
            })
            .addCase(registerUser.rejected, (state, {payload}) => {
                state.isLoading = false;
                toast.error(payload);
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, {payload}) => {
                const {user} = payload;
                state.isLoading = false;
                state.user = user;
                addUserToLocalStorage(user);

                toast.success(`Welcome Back ${user.name}`);
            })
            .addCase(loginUser.rejected, (state, {payload}) => {
                state.isLoading = false;
                toast.error(payload);
            })
            .addCase(updateUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateUser.fulfilled, (state, {payload}) => {
                const {user} = payload;
                state.isLoading = false;
                state.user = user;
                addUserToLocalStorage(user);

                toast.success(`User Updated`);
            })
            .addCase(updateUser.rejected, (state, {payload}) => {
                state.isLoading = false;
                toast.error(payload);
            })
    },
});

export const {toggleSidebar, logoutUser} = userSlice.actions
export default userSlice.reducer;
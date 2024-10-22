import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie'; 
import Axios from '../config'; //
import { toast } from 'react-toastify';

// Thunks for login and registration
export const loginUser = createAsyncThunk('user/login', async (userData, { rejectWithValue }) => {
    try {
        const response = await Axios.post('/login', userData); 
        const { token } = response.data;
        Cookies.set('token', token, { expires: 7 });
        toast.success(response?.data?.message || 'Login Successfull!');
        return response.data;
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data?.message || 'Login failed');
        return rejectWithValue(error.response?.data || 'Login failed');
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null,
    },
    reducers: {
        logout(state) {
            state.user = null;
            state.isAuthenticated = false;
            Cookies.remove('token');
        },
    },
    extraReducers: (builder) => {
        builder
            // Handle login
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Login failed';
            })

    
    },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

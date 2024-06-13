// src/Utils/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    user: null, // Add user details if needed
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        logOut: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        },
    },
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;

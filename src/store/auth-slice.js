import { createSlice } from "@reduxjs/toolkit";

const authSlices = createSlice({
    name: 'auth',
    initialState: { isLoggedIn: false},
    reducers: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false 
        }
    }
});

export const authActions = authSlices.actions;

export default authSlices
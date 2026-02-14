import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'idle',
    userDetails: [],
    tempDetails: [],
    loading: false,
    currentUser: JSON.parse(localStorage.getItem('user')) || null,
    currentRole: (JSON.parse(localStorage.getItem('user')) || {}).role || null,
    error: null,
    response: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authRequest: (state) => {
            state.loading = true;
        },
        underControl: (state) => {
            state.status = 'idle';
            state.response = null;
        },
        stuffAdded: (state, action) => {
            state.status = 'added';
            state.response = null;
            state.error = null;
            state.tempDetails = action.payload;
        },
        authSuccess: (state, action) => {
            localStorage.setItem('user', JSON.stringify(action.payload));
            state.currentUser = action.payload;
            state.currentRole = action.payload.role;
            state.status = 'success';
            state.response = null;
            state.error = null;
            state.loading = false;
        },
        authFailed: (state, action) => {
            state.status = 'failed';
            state.response = action.payload;
            state.loading = false;
            state.error = null;
        },
        authError: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
            state.loading = false;
            state.response = null;
        },
        authLogout: (state) => {
            localStorage.removeItem('user');
            state.currentUser = null;
            state.currentRole = null;
            state.status = 'idle';
            state.error = null;
            state.response = null;
        },
        getRequest: (state) => {
            state.loading = true;
        },
        getSuccess: (state, action) => {
            state.userDetails = action.payload;
            state.loading = false;
            state.error = null;
            state.response = null;
        },
        getFailed: (state, action) => {
            state.response = action.payload;
            state.loading = false;
            state.error = null;
        },
        getError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        stuffUpdated: (state) => {
            state.status = 'updated';
            state.response = null;
            state.error = null;
        },
        stuffDeleted: (state) => {
            state.status = 'deleted';
            state.response = null;
            state.error = null;
        }
    },
});

export const {
    authRequest,
    underControl,
    stuffAdded,
    authSuccess,
    authFailed,
    authError,
    authLogout,
    getRequest,
    getSuccess,
    getFailed,
    getError,
    stuffUpdated,
    stuffDeleted
} = userSlice.actions;

export const userReducer = userSlice.reducer;

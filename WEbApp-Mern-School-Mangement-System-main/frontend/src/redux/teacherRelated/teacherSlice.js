import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    teachersList: [],
    teacherDetails: {},
    loading: false,
    error: null,
    response: null,
    status: 'idle',
};

const teacherSlice = createSlice({
    name: 'teacher',
    initialState,
    reducers: {
        getRequest: (state) => {
            state.loading = true;
        },
        getSuccess: (state, action) => {
            state.teachersList = action.payload;
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
        getTeacherSuccess: (state, action) => {
            state.teacherDetails = action.payload;
            state.loading = false;
            state.error = null;
            state.response = null;
        },
        underTeacherControl: (state) => {
            state.status = 'idle';
            state.response = null;
        },
        stuffDone: (state) => {
            state.status = 'added';
            state.response = null;
            state.error = null;
        },
        updateSuccess: (state) => {
            state.status = 'updated';
            state.response = null;
            state.error = null;
        },
        deleteSuccess: (state) => {
            state.status = 'deleted';
            state.response = null;
            state.error = null;
        }
    },
});

export const {
    getRequest,
    getSuccess,
    getFailed,
    getError,
    getTeacherSuccess,
    underTeacherControl,
    stuffDone,
    updateSuccess,
    deleteSuccess
} = teacherSlice.actions;

export const teacherReducer = teacherSlice.reducer;

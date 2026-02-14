import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    studentsList: [],
    studentDetails: {},
    loading: false,
    error: null,
    response: null,
    status: 'idle',
};

const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        getRequest: (state) => {
            state.loading = true;
        },
        getSuccess: (state, action) => {
            state.studentsList = action.payload;
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
        getStudentSuccess: (state, action) => {
            state.studentDetails = action.payload;
            state.loading = false;
            state.error = null;
            state.response = null;
        },
        underStudentControl: (state) => {
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
    getStudentSuccess,
    underStudentControl,
    stuffDone,
    updateSuccess,
    deleteSuccess
} = studentSlice.actions;

export const studentReducer = studentSlice.reducer;

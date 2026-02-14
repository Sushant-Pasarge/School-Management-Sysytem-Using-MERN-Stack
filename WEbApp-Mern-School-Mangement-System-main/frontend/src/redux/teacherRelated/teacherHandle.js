import axios from 'axios';
import {
    getRequest,
    getSuccess,
    getFailed,
    getError,
    getTeacherSuccess,
    updateSuccess,
    deleteSuccess
} from './teacherSlice';

export const getAllTeachers = (id) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/Teachers/${id}`);
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        } else {
            dispatch(getSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(error.response?.data?.message || error.message || 'Network Error'));
    }
}

export const getTeacherDetail = (id) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/Teacher/${id}`);
        if (result.data) {
            dispatch(getTeacherSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(error.response?.data?.message || error.message || 'Network Error'));
    }
}

export const updateTeacherFields = (id, fields, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.put(`${process.env.REACT_APP_BASE_URL}/${address}/${id}`, fields, {
            headers: { 'Content-Type': 'application/json' },
        });
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        } else {
            dispatch(updateSuccess());
        }
    } catch (error) {
        dispatch(getError(error.response?.data?.message || error.message || 'Network Error'));
    }
}

export const deleteTeacher = (id) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.delete(`${process.env.REACT_APP_BASE_URL}/Teacher/${id}`);
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        } else {
            dispatch(deleteSuccess());
        }
    } catch (error) {
        dispatch(getError(error.response?.data?.message || error.message || 'Network Error'));
    }
}

export const updateTeachSubject = (teacherId, teachSubject) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.put(`${process.env.REACT_APP_BASE_URL}/TeacherSubject`, { teacherId, teachSubject }, {
            headers: { 'Content-Type': 'application/json' },
        });
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        } else {
            dispatch(updateSuccess());
        }
    } catch (error) {
        dispatch(getError(error.response?.data?.message || error.message || 'Network Error'));
    }
}

export const getTeacherDetails = (id) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/Teacher/${id}`);
        if (result.data) {
            dispatch(getTeacherSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(error.response?.data?.message || error.message || 'Network Error'));
    }
}

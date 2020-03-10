import axios from 'axios'
import {
    LOADING_UI,
    UNLOADING_UI,
    SET_ERRORS,
    UNSET_ERRORS,
    GET_GRIEVANCES, SELECT_GRIEVANCE, GET_SELECTED,DESELECT_GRIEVANCE, ALLOCATE_DATE
} from './constants'


export const setErrors = (error) => ({
    type: SET_ERRORS,
    error
});

export const unsetErrors = () => ({
    type: UNSET_ERRORS,
});


export const getGrievances = (grievances) => ({
    type: GET_GRIEVANCES,
    grievances
});

export const getSelected = (selected) => ({
    type: GET_SELECTED,
    selected
});

export const loading = () => ({
    type: LOADING_UI,
});

export const unLoading = () => ({
    type: UNLOADING_UI,
})

export const selectGrievance = (id) => ({
    type: SELECT_GRIEVANCE,
    id
});

export const deselectGrievance = (id) => ({
    type: DESELECT_GRIEVANCE,
    id
});


// export const allocateDate = (id) => ({
//     type: ALLOCATE_DATE,
//     id,
//     date
// });

export const startGetGrievances = () => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            const res = await axios.get('http://localhost:2000/api/grievances');
            dispatch(getGrievances(res.data.grievances))
        }
        catch (error) {
            dispatch(setErrors(
                error.response ? error.response.data.message : ''
            ))
        }
    }
}


export const startGetSelected = () => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            const res = await axios.get('http://localhost:2000/api/grievances/selected');
            dispatch(getSelected(res.data))
        }
        catch (error) {
            dispatch(setErrors(
                error.response ? error.response.data.message : ''
            ))
        }
    }
}

export const startGetUnderProcess = () => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            const res = await axios.get('http://localhost:2000/api/grievances/process');
            dispatch(getSelected(res.data))
        }
        catch (error) {
            dispatch(setErrors(
                error.response ? error.response.data.message : ''
            ))
        }
    }
}

export const startSelectGrievance = (id) => {
    return async (dispatch) => {
        dispatch(loading());
        dispatch(selectGrievance(id))
        try {
            const res = await axios.post('http://localhost:2000/api/grievance/select', {grievanceId: id});
        }
        catch (error) {
            dispatch(setErrors(
                error.response ? error.response.data.message : ''
            ))
        }
    }
}

export const startDeselectGrievance = (id) => {
    return async (dispatch) => {
        dispatch(loading());
        dispatch(deselectGrievance(id))
        try {
            const res = await axios.post('http://localhost:2000/api/grievance/deselect', {grievanceId: id});
        }
        catch (error) {
            dispatch(setErrors(
                error.response ? error.response.data.message : ''
            ))
        }
    }
}


export const startAllocateDate = (id, allotedDate, email, date) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            const res = await axios.post('http://localhost:2000/api/grievance/date', {grievanceId: id, alloted_date: allotedDate, email, date });
        }
        catch (error) {
            dispatch(setErrors(
                error.response ? error.response.data.message : ''
            ))
        }
    }
}


export const startRejectGrievance = (id, email) => {
    console.log(email)
    return async (dispatch) => {
        dispatch(loading());
        try {
            const res = await axios.post('http://localhost:2000/api/grievance/reject', {grievanceId: id , email});
        }
        catch (error) {
            dispatch(setErrors(
                error.response ? error.response.data.message : ''
            ))
        }
    }
}


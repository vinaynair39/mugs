import { GET_GRIEVANCES } from './constants';
import axios from 'axios'
import {
    LOADING_UI,
    UNLOADING_UI,
    SET_ERRORS,
    UNSET_ERRORS

} from './constants'


export const setErrors = (error) => ({
    type: SET_ERRORS,
    error
});

export const unsetErrors = () => ({
    type: UNSET_ERRORS,
});


export const getGrievances = () => ({
    type: GET_GRIEVANCES,
});

export const loading = () => ({
    type: LOADING_UI,
});

export const unLoading = () => ({
    type: UNLOADING_UI,
})


export const startGetGrievances = () => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            const res = await axios.get('http://localhost:9900/display');
            // dispatch(login());
            return res.data.grievances;
        }
        catch (error) {
            dispatch(setErrors(
                error.response ? error.response.data.message : ''
            ))
        }
    }
}
import axios from 'axios';
import {
    LOGIN, LOGOUT, LOADING_UI,
    UNLOADING_UI,
    UNSET_ERRORS,
    SET_ERRORS,
    SET_USER_TYPE,
    SET_USER,
    SET_MOBILE_MENU,
    TOGGLE_MENU

} from './constants'
import { startGetGrievances } from './secretary';


export const login = () => ({
    type: LOGIN,
});

export const loading = () => ({
    type: LOADING_UI,
});

export const unLoading = () => ({
    type: UNLOADING_UI,
})

export const setErrors = (error) => ({
    type: SET_ERRORS,
    error
});

export const unsetErrors = () => ({
    type: UNSET_ERRORS,
});

export const setUserType = (userType) => ({
    type: SET_USER_TYPE,
    userType
});

export const setUser = (user) => ({
    type: SET_USER,
    user
});

export const logout = () => ({
    type: LOGOUT
});

export const setIsMobileMenu = windowWidth => ({
    type: SET_MOBILE_MENU,
    isMobileMenu: windowWidth <= 768
})

export const toggleMobileMenuOpen = () => ({
    type: TOGGLE_MENU
})




export const startSignUp = (newUser) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            console.log({ ...newUser })
            const res = await axios.post('http://localhost:2000/api/register', newUser);
            dispatch(setUserType(res.data.userType));
            // saveUserToLocalStorage(res.data.userType);
            setAuthorizationHeader(res.data.token, res.data.userType);
            dispatch(login());
        }
        catch (error) {
            dispatch(setErrors(
                error.response ? (error.response.data.general || error.response.data.email || error.response.data.password || error.response.data.error || error.response.data.handle) : ''
            ))
        }
    }
}


export const startLogin = (newUser) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            const res = await axios.post('http://localhost:2000/api/login', newUser);
            setAuthorizationHeader(res.data.token, res.data.userType);
            dispatch(setUserType(res.data.userType));
            dispatch(setUser({name: res.data.name, imageUrl: res.data.imageUrl}))
            saveUserToLocalStorage({name: res.data.name, imageUrl: res.data.imageUrl})
            dispatch(startGetGrievances())
            dispatch(login());
        }
        catch (error) {
            console.log(error)
            dispatch(setErrors(
                error.response ? error.response.data.message : ''
            ))
        }
    }
}


export const saveUserToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('user', serializedState)
    } catch (e) {
        console.log(e)
    }
}

export const startLogout = () => {
    return (dispatch) => {
        localStorage.removeItem('token');
        localStorage.removeItem('userType');
        delete axios.defaults.headers.common['x-access-token'];
        dispatch(logout());
    };
};

export const setAuthorizationHeader = (token, userType) => {
    console.log(token, userType)
    localStorage.setItem('token', token);
    localStorage.setItem('userType', userType);
    axios.defaults.headers.common['x-access-token'] = token;
};
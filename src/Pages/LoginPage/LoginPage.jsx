import React from 'react';
import windowSize from 'react-window-size';
import { Modal } from 'antd'
import './LoginPage.scss'
import LoginForm from '../../components/LoginForm/LoginForm';
import { useSelector, useDispatch } from 'react-redux';
import { unsetErrors } from '../../actions/secretary';
import { Loader } from '../../components/Loader/Loader';


const LoginPage = (props) => {
    const error = useSelector(state => state.auth.error);
    const loading = useSelector(state => state.auth.loading)
    const dispatch = useDispatch();

    function errorModal(message) {
        Modal.error({
            title: message
        });
        dispatch(unsetErrors())
    }
    return (
        <>
            {loading && <Loader />}
            <div className='LoginPage'>
                {!!error && errorModal(error)}
                <div className="LoginPage__img animated fadeIn">{props.windowWidth > 1100 && <img src={''} alt="" />}</div>
                <div className="LoginPage__card animated fadeIn">
                    <img src={process.env.PUBLIC_URL + '/login2.svg'} alt=""/>
                    <LoginForm />
                </div>
            </div>
        </>
    );
}

export default windowSize(LoginPage);
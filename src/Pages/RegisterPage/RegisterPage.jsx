import React from 'react';
import windowSize from 'react-window-size'
import { Modal } from 'antd'
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './RegisterPage.scss'
import Register from '../../components/Backgrounds/Register';
import { useSelector, useDispatch } from 'react-redux';
import { unsetErrors } from '../../actions/secretary';
import LLayout from '../../components/LLayout/LLayout';


const RegisterPage = (props) => {
    const error = useSelector(state => state.auth.error);
    const dispatch = useDispatch();

    function errorModal(message) {
        Modal.error({
            title: message
        });
        dispatch(unsetErrors())
    }

    function infoModal(message) {
        Modal.info({
            title: 'verification sent. Go to your Email and click on the link provided'
        });
        dispatch(unsetErrors())
    }
    return (
        <LLayout>
            <div className='RegisterPage'>
                {!!error && errorModal(error)}
                <div className="RegisterPage__img">
                    {props.windowWidth > 1200 && <Register />}
                </div>
                <div className="RegisterPage__card">
                    <RegisterForm />
                </div>
            </div>
        </LLayout>
    );
}

export default windowSize(RegisterPage);


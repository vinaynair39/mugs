import React from 'react';
import windowSize from 'react-window-size'
import './LoginPage.scss'
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
    return (
        <div className='LoginPage'>
            {/* {props.windowWidth > 1200 && <img src={process.env.PUBLIC_URL + '/login.svg'} alt="" />} */}
            <LoginForm/>
        </div>
    );
}

export default windowSize(LoginPage);
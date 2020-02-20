import React from 'react';
import windowSize from 'react-window-size'
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.scss'


const LoginPage = (props) => {
    return (
        <div className='LoginPage'>
            {props.windowWidth > 1200 && <img src={process.env.PUBLIC_URL + '/login.svg'} alt="" />}
            <LoginForm/>
        </div>
    );
}

export default windowSize(LoginPage);
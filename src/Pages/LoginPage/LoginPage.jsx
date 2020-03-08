import React from 'react';
import windowSize from 'react-window-size'
import './LoginPage.scss'
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = (props) => {
    return (
        <div className='LoginPage'>
            <div className="LoginPage__img animated fadeIn">{props.windowWidth > 1100 && <img src={process.env.PUBLIC_URL + '/login2.svg'} alt="" />}</div>
            <div className="LoginPage__card">
                <LoginForm />
            </div>
        </div>
    );
}

export default windowSize(LoginPage);
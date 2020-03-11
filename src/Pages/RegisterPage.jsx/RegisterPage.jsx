import React from 'react';
import windowSize from 'react-window-size'
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './RegisterPage.scss'
import Register from '../../components/Backgrounds/Register';


const RegisterPage = (props) => {
    return (
        <div className='RegisterPage'>
            {props.windowWidth > 1200 && <Register/> }
            <div className="RegisterPage__card">
                <RegisterForm />
            </div>
        </div>
    );
}

export default windowSize(RegisterPage);


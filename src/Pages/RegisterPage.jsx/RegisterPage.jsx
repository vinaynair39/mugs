import React from 'react';
import windowSize from 'react-window-size'
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './RegisterPage.scss'


const RegisterPage = (props) => {
    return (
        <div className='RegisterPage'>
            {/* {props.windowWidth > 1200 && <img src={process.env.PUBLIC_URL + '/login.svg'} alt="" />} */}
            <RegisterForm/>
        </div>
    );
}

export default windowSize(RegisterPage);


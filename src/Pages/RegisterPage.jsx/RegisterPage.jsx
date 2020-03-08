import React from 'react';
import windowSize from 'react-window-size'
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './RegisterPage.scss'


const RegisterPage = (props) => {
    return (
        <div className='RegisterPage'>
            {props.windowWidth > 1200 && <div className='RegisterPage__img animated fadeIn'><img src={process.env.PUBLIC_URL + '/student.svg'} alt="" /></div>}
            <div className="RegisterPage__card">
                <RegisterForm />
            </div>
        </div>
    );
}

export default windowSize(RegisterPage);


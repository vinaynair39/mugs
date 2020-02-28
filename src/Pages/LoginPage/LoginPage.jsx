import React from 'react';
import windowSize from 'react-window-size'
import LoginForm from '../../components/LoginForm/LoginForm';
// import NavBar from '../../containers/NavBar/NavBar';
import './LoginPage.scss'



const LoginPage = () => {
    return (
        <div className='LoginPage'>
            {/* {props.windowWidth > 1200 && <img src={process.env.PUBLIC_URL + '/login.svg'} alt="" />} */}
            <LoginForm/>
            {/* <NavBar/> */}
        </div>
    );
}

export default windowSize(LoginPage);
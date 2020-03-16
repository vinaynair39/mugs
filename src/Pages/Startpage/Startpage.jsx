import React, { Component } from 'react';
import LLayout from '../../components/LLayout/LLayout';
import CCarousel from '../../components/Carousel/Carousel';
import LoginForm from '../../components//LoginForm/LoginForm'
import windowSize from 'react-window-size'
import { Modal } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import { unsetErrors } from '../../actions/secretary';
import { Loader } from '../../components/Loader/Loader';

// import Loginform from '../Loginform/Loginform'
import './Startpage.scss'

const Startpage = (props) => {
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
        <LLayout>
            {loading && <Loader />}
            <div className="startpage_row">
                {!!error && errorModal(error)}
                {props.windowWidth > 1100 && <div className="startpage_child1"><CCarousel /></div>}
                <div className="LoginPage__card animated fadeIn">
                    {props.windowWidth > 500 && <img src={process.env.PUBLIC_URL + '/login2.svg'} alt="" />}
                    <LoginForm />
                </div>
            </div>
        </LLayout>
    )
}

export default windowSize(Startpage);
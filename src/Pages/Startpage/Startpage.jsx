import React, { Component } from 'react';
import LLayout from '../../components/LLayout/LLayout';
import CCarousel from '../../components/Carousel/Carousel';
import LoginForm from '../../components//LoginForm/LoginForm'
import windowSize from 'react-window-size'
// import Loginform from '../Loginform/Loginform'
import './Startpage.scss'
import { Row, Col } from 'antd';

class Startpage extends Component {
    render() {
        return (
            <LLayout>
                <div className="startpage_row">
                    {this.props.windowWidth > 1100 && <div className="startpage_child1"><CCarousel /></div>}
                    <div className="LoginPage__card animated fadeIn">
                        {this.props.windowWidth > 500 && <img src={process.env.PUBLIC_URL + '/login2.svg'} alt="" />}
                        <LoginForm />
                    </div>
                </div>
            </LLayout>
        )
    }
}

export default windowSize(Startpage);
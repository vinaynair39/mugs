import React,{Component} from 'react';
import LLayout from '../LLayout/LLayout';
import './contact.scss'
import {PhoneOutlined } from '@ant-design/icons';

class Contact extends Component{
    render(){
        return(
            <LLayout>
                <div className="contact_style">
                    <ul>
                        <li>
                            <h3>Fort Campus</h3>
                                <ul>
                                <li><h4>M.G. Road, Fort, Mumbai - 400 032.</h4></li>
                                <li><h4>022 22708700</h4></li>
                                </ul>
                        </li>
                        <li>
                            <h3>Kalina Campus</h3>
                                <ul>
                                <li><h4>University of Mumbai,Vidya Nagari, Kalina, Santacruz East, Mumbai, Maharashtra 400098.</h4></li>
                                <li><h4>022 26543000</h4></li>
                                </ul>
                        </li>
                    </ul>
                </div>
            </LLayout>
        )
    }
}

export default Contact
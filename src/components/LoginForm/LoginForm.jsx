import React, { useState } from 'react'
import {
    Form,
    Input,
    Select,
    Button,
    AutoComplete,
    Typography,
    Divider
} from 'antd';

import { MailOutlined, RedoOutlined } from '@ant-design/icons';

import './LoginForm.scss'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/auth';

const {Text} = Typography


const LoginForm = (props) => {

    const dispatch = useDispatch();

    const { getFieldDecorator } = props.form;

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                dispatch(startLogin(values))
            }
        });

    };


    return (
        <div className="LoginForm animated fadeIn">
            <div className="register_heading flex-bottom"><Text >Login</Text></div><Divider />
            <Form onSubmit={handleSubmit} >
                <Form.Item >
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please Enter Your Email!' }],
                    })(<Input prefix={<MailOutlined />} placeholder="Email" style={{ width: '1r6em', borderRadius: '5px' }} />)}
                </Form.Item>
                <Form.Item placeholder='Password' >
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: 'Please Enter your password!',
                            },
                        ],
                    })(<Input.Password prefix={<RedoOutlined />} placeholder="Password" style={{ borderRadius: '5px', justifySelf: 'center', width: '16rem' }} />)}
                </Form.Item>
                <div className='LoginForm-button'>
                    <Button htmlType="submit" size="large">
                        Login
                </Button>
                </div>
                <div className="LoginForm-login">
                    <h5>Not Registered?</h5><Link to="/register">Register</Link>
                </div>
            </Form>
        </div>
    );
}

export default Form.create({ name: 'register' })(LoginForm);;
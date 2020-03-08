import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {
    Form,
    Input,
    Select,
    Button,
    Typography,
    Divider,
    AutoComplete,
} from 'antd';
import windowSize from 'react-window-size';

import './RegisterForm.scss'
import { useDispatch } from 'react-redux';
import { startSignUp } from '../../actions/auth';

const { Option } = Select;
const { Text } = Typography;


const RegisterForm = (props) => {

    const dispatch = useDispatch();

    const [state, setState] = useState({
        confirmDirty: false,
        autoCompleteResult: [],
    });

    const { getFieldDecorator } = props.form;

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                delete values.prefix;
                delete values.confirm
                dispatch(startSignUp(values))
            }
        });
    };

    const handleConfirmBlur = e => {
        const { value } = e.target;
        setState({ ...state, confirmDirty: state.confirmDirty || !!value });
    };

    const compareToFirstPassword = (rule, value, callback) => {
        const { form } = props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Passwords does not match!');
        } else {
            callback();
        }
    };

    const validateToNextPassword = (rule, value, callback) => {
        const { form } = props;
        console.log(rule)
        if (value && state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        else if (value.length < 6 && value.length != 0) {
            callback('Atleast 6 characters required!');
        }
        callback();
    };

    const formItemLayout = {
        labelCol: {
            xs: { span: 10 },
        },
        wrapperCol: {
            xs: { span: 14 },
        },
    };

    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 9,
            },
            sm: {
                span: 5,
                offset: 9,
            },
        },
    };



    return (
        <div className="RegisterForm animated fadeIn">
            <Form z onSubmit={handleSubmit} >
                <div className="register_heading flex-bottom"><Text >Student Registration</Text></div><Divider />
                <div className="RegisterForm__grid">
                    <div className="RegisterForm__first">
                        <Form.Item label="Full Name">
                            {getFieldDecorator('name', {
                                rules: [{ required: true, message: 'Please Enter your First Name!', whitespace: true }],
                            })(<Input placeholder="Enter your name" />)}
                        </Form.Item>
                        <Form.Item label="Phone Number">
                            {getFieldDecorator('phone', {
                                rules: [{ required: true, type: 'number', message: 'Please enter a valid Phone number!' }],
                            })(<Input style={{ width: '100%' }} />)}
                        </Form.Item>
                        <Form.Item label="Password" hasFeedback>
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                    {
                                        validator: validateToNextPassword,
                                    },
                                ],
                            })(<Input.Password />)}
                        </Form.Item>

                    </div>
                    <div className="RegisterFrom__second">
                        <Form.Item label="Email">
                            {getFieldDecorator('email', {
                                rules: [{ required: true, type: 'email', message: 'Please enter a valid email!', whitespace: true }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Roll Number">
                            {getFieldDecorator('rollNo', {
                                rules: [{ required: true, message: 'Please Enter your College Roll Number!', whitespace: true }],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Confirm Password" hasFeedback>
                            {getFieldDecorator('confirm', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    {
                                        validator: compareToFirstPassword,
                                    },
                                ],
                            })(<Input.Password onBlur={handleConfirmBlur} />)}
                        </Form.Item>
                    </div>
                </div>
                <Form.Item style={{display: "flex", justifyContent: "center", width: "100%", marginTop: "1rem"}} label="College">
                    {getFieldDecorator('college', {
                        rules: [{ required: true, message: 'Please Select your College!' }],
                    })(<Select placeholder="College Name" style={{ width: '8rem' }}>
                        <Option key={1} value="rait">
                            Rait
                        </Option>
                        <Option key={2} value="sies">
                            Sies
                        </Option>
                        <Option key={3} value="pillai">
                            Pillai
                        </Option>
                        <Option key={4} value="kj">
                            kj
                        </Option>
                    </Select>)
                    }
                </Form.Item>
                <div className='RegisterForm-button'>
                    <Button type="primary" htmlType="submit" size="large" shape="round">
                        Register
                </Button>
                </div>
                <div className="RegisterForm-login">
                    <h5>Already Registered?</h5><Link to="/login">Sign in</Link>
                </div>
            </Form>
        </div>
    );
}

export default Form.create({ name: 'register' })(RegisterForm);;
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { UserOutlined, MailOutlined, PhoneOutlined, FieldBinaryOutlined, RedoOutlined, UndoOutlined, ShopOutlined } from '@ant-design/icons';
import windowWidth from 'react-window-size'
import { unsetErrors } from '../../actions/auth';

import {
    Form,
    Input,
    Select,
    Button,
    Typography,
    Divider,
    Modal,
    AutoComplete,
} from 'antd';
import './RegisterForm.scss'
import { useDispatch, useSelector } from 'react-redux';
import { startSignUp } from '../../actions/auth';
import { history } from '../../routers/AppRouter';

const { Option } = Select;
const { Text } = Typography;


const RegisterForm = (props) => {

    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading)


    const [state, setState] = useState({
        confirmDirty: false,
        autoCompleteResult: [],
    });

    const { getFieldDecorator } = props.form;

    function info(msg) {
        Modal.info({
            title: msg,
            onOk() {
                history.push('/')
            },
        });
        dispatch(unsetErrors())
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                delete values.prefix;
                delete values.confirm
                values.mobile = parseInt(values.mobile)
                dispatch(startSignUp(values)).then(data => !!data && info(data))
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


    const validatePhone = (rule, value, callback) => {
        const { form } = props;
        // if (value && state.confirmDirty) {
        //     form.validateFields(['confirm'], { force: true });
        // }
        if (value.length > 10 && value.length != 0) {
            callback('Phone number cannot be more than 10 digits!');
        }
        else if (value.length < 10 && value.length != 0) {
            callback('Phone number cannot be less than 10 digits!');
        }
        callback();
    };


    return (
        <div className="RegisterForm animated fadeIn">
            <Form onSubmit={handleSubmit} >
                <div className="register_heading flex-bottom"><Text >Student Registration</Text></div><Divider />
                <div className="RegisterForm__grid">
                    <div className="RegisterForm__first">
                        <Form.Item>
                            {getFieldDecorator('name', {
                                rules: [{ required: true, message: 'Please Enter your First Name!', whitespace: true }],
                            })(<Input prefix={<UserOutlined />} placeholder="Name" />)}
                        </Form.Item>
                        <Form.Item >
                            {getFieldDecorator('mobile', {
                                rules: [{ required: true, message: 'Please enter a valid Phone number!' }, { validator: validatePhone }],
                            })(<Input prefix={<PhoneOutlined />} placeholder="Phone Number" style={{ width: '100%' }} />)}
                        </Form.Item>
                        {props.windowWidth > 800 &&
                            <>
                                <Form.Item hasFeedback>
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
                                    })(<Input.Password prefix={<RedoOutlined />} placeholder="Password" />)}
                                </Form.Item>
                                <Form.Item style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }} >
                                    {getFieldDecorator('gender', {
                                        rules: [{ required: true, message: 'Please Select your Gender!' }],
                                    })(<Select placeholder="Gender" style={{ width: '9rem', textAlign: "center" }}>
                                        <Option key={1} value="male">
                                            Male
                                </Option>
                                        <Option key={2} value="female">
                                            Female
                                </Option>
                                    </Select>
                                    )
                                    }
                                </Form.Item>
                            </>
                        }
                    </div>
                    <div className="RegisterFrom__second">
                        <Form.Item hasFeedback>
                            {getFieldDecorator('email', {
                                rules: [{ required: true, type: 'email', message: 'Please enter a valid email!', whitespace: true }],
                            })(<Input prefix={<MailOutlined />} placeholder="Email" />)}
                        </Form.Item>
                        <Form.Item >
                            {getFieldDecorator('rollNo', {
                                rules: [{ required: true, message: 'Please Enter your College Roll Number!', whitespace: true }],
                            })(<Input prefix={<FieldBinaryOutlined />} placeholder="Roll Number" />)}
                        </Form.Item>
                        {props.windowWidth < 800 &&
                            <Form.Item hasFeedback>
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
                                })(<Input.Password prefix={<RedoOutlined />} placeholder="Password" />)}
                            </Form.Item>
                        }
                        <Form.Item placeholder="Enter your Confirm Password" hasFeedback>
                            {getFieldDecorator('confirm', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please Enter your confirm password!',
                                    },
                                    {
                                        validator: compareToFirstPassword,
                                    },
                                ],
                            })(<Input.Password prefix={<UndoOutlined />} placeholder="Confirm Password" onBlur={handleConfirmBlur} />)}
                        </Form.Item>
                        {props.windowWidth < 800 &&
                            <Form.Item style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }} >
                                {getFieldDecorator('gender', {
                                    rules: [{ required: true, message: 'Please Select your Gender!' }],
                                })(<Select placeholder="Gender" style={{ width: '9rem', textAlign: "center" }}>
                                    <Option key={1} value="male">
                                        male
                                </Option>
                                    <Option key={2} value="female">
                                        female
                                </Option>
                                </Select>
                                )
                            }
                            </Form.Item>}
                        <Form.Item style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }} >
                            {getFieldDecorator('college', {
                                rules: [{ required: true, message: 'Please Select your College!' }],
                            })(<Select placeholder="College Name" style={{ width: '9rem', textAlign: "center" }}>
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
                    </div>
                </div>
                <div className='RegisterForm-button'>
                    <Button type="primary" disabled={loading === true} htmlType="submit" size="large" shape="round" style={{ boxShadow: "0px 1px 10px 1px #ccc" }}>
                        Register
                </Button>
                </div>
                <div className="RegisterForm-login">
                    <h5>Already Registered?</h5><Link to="/">Sign in</Link>
                </div>
            </Form>
        </div>
    );
}

export default Form.create({ name: 'register' })(windowWidth(RegisterForm));
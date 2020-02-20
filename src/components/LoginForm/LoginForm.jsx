import React, { useState } from 'react'
import {
    Form,
    Input,
    Select,
    Button,
    AutoComplete,
} from 'antd';

import '../RegisterForm/RegisterForm.scss'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;


const LoginForm = (props) => {

    const dispatch = useDispatch();


    const [state, setState] = useState({
        confirmDirty: false,
    });

    const { getFieldDecorator } = props.form;

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
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
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    const validateToNextPassword = (rule, value, callback) => {
        const { form } = props;
        if (value && state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
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

    const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86',
    })(
        <Select style={{ width: 70 }}>
            <Option value="86">+91</Option>
        </Select>,
    );


    return (
        <div className="RegisterForm animated fadeIn">
            <Form {...formItemLayout} onSubmit={handleSubmit} >
                {/* <Form.Item label="E-mail">
                    {getFieldDecorator('email', {
                        rules: [
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ],
                    })(<Input />)}
                </Form.Item> */}
                <Form.Item label="Phone Number">
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input your phone number!' }],
                    })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                </Form.Item>
                {/* <Form.Item label="Website">
                    {getFieldDecorator('website', {
                        rules: [{ required: true, message: 'Please input website!' }],
                    })(
                        <AutoComplete
                            dataSource={websiteOptions}
                            onChange={handleWebsiteChange}
                            placeholder="website"
                        >
                            <Input />
                        </AutoComplete>,
                    )}
                </Form.Item> */}
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
                <div className='RegisterForm-button'>
                    <Button type="primary" htmlType="submit" size="large" shape="round">
                        Login
                </Button>
                </div>
                <div className="RegisterForm-login">
                    <h5>Not Registered?</h5><Link to="/register">Register</Link>
                </div>
            </Form>
        </div>
    );
}

export default Form.create({ name: 'register' })(LoginForm);;
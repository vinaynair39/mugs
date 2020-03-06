import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {
    Form,
    Input,
    Select,
    Button,
    AutoComplete,
} from 'antd';
import windowSize from 'react-window-size';



import './RegisterForm.scss'
import { useDispatch } from 'react-redux';
import { startSignUp } from '../../actions/auth';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;




const RegisterForm = (props) => {

    const dispatch = useDispatch();

    
    const [state, setState] = useState({
        confirmDirty: false,
        autoCompleteResult: [],
    });

    const { getFieldDecorator } = props.form;
    const { autoCompleteResult } = state;

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
        else if(value.length < 6 && value.length !=0){
            callback('Atleast 6 characters required!');
        }
        callback();
    };

    const handleWebsiteChange = value => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        setState({ ...state, autoCompleteResult });
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

    const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '91',
    })(
        <Select style={{ width: 70 }}>
            <Option value="91">+91</Option>
        </Select>,
    );

    const websiteOptions = autoCompleteResult.map(website => (
        <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));


    return (
        <div className="RegisterForm animated fadeIn">
            <Form {...formItemLayout} onSubmit={handleSubmit} >
                <Form.Item label="First Name">
                    {getFieldDecorator('firstName', {
                        rules: [{ required: true, message: 'Please Enter your First Name!', whitespace: true }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Last Name">
                    {getFieldDecorator('lastName', {
                        rules: [{ required: true, message: 'Please Enter your Last Name!', whitespace: true }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Phone Number">
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input your phone number!' }],
                    })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
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
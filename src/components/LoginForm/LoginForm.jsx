import React, { useState } from 'react'
import {
    Form,
    Input,
    Select,
    Button,
    AutoComplete,
} from 'antd';

import './LoginForm.scss'
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

    // const prefixSelector = getFieldDecorator('prefix', {
    //     initialValue: '86',
    // })(
    //     <Select style={{ width: 70 }}>
    //         <Option value="86">+91</Option>
    //     </Select>,
    // );


    return (
        <div className="LoginForm-background">
        <div className="LoginForm animated fadeIn">
            <Form {...formItemLayout} onSubmit={handleSubmit} >
                <Form.Item >
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input Correct Email!' }],
                    })(<Input placeholder="Email" style={{ width: '250px' ,borderRadius:'5px'}} />)}
                </Form.Item>
                <Form.Item placeholder='Password' hasFeedback>
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
                    })(<Input placeholder="Password" style={{borderRadius:'5px', justifySelf:'center', width:'250px'}} />)}
                </Form.Item>
                <div className='LoginForm-button'>
                    <Button type="primary" htmlType="submit" size="large" shape="round">
                        Login
                </Button>
                </div>
                <div className="LoginForm-login">
                    <h5>Not Registered?</h5><Link to="/register">Register</Link>
                </div>
            </Form>
        </div>
    </div>
    );
}

export default Form.create({ name: 'register' })(LoginForm);;
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
import { startLogin } from '../../actions/auth';

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
                dispatch(startLogin(values))
            }
        });

    };

    const handleConfirmBlur = e => {
        const { value } = e.target;
        setState({ ...state, confirmDirty: state.confirmDirty || !!value });
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


    return (
        <div className="LoginForm animated fadeIn">
            <Form onSubmit={handleSubmit} >
                <Form.Item >
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please Enter Your Email!' }],
                    })(<Input placeholder="Email" style={{ width: '250px' ,borderRadius:'5px'}} />)}
                </Form.Item>
                <Form.Item placeholder='Password' >
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: 'Please Enter your password!',
                            },
                            {
                                validator: validateToNextPassword,
                            },
                        ],
                    })(<Input.Password placeholder="Password" style={{borderRadius:'5px', justifySelf:'center', width:'250px'}} />)}
                </Form.Item>
                <div className='LoginForm-button'>
                    <Button  htmlType="submit" size="large">
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
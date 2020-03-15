import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
    Form,
    Input,
    Select,
    Button,
    AutoComplete,
    Upload,
    message
} from 'antd';
import windowSize from 'react-window-size';
import { UploadOutlined } from '@ant-design/icons';

// import '../RegisterForm.scss'
import { useDispatch } from 'react-redux';
import { startSignUp } from '../../actions/auth';
import './CommitteeForm.scss'
import { history } from '../../routers/AppRouter';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const data = new FormData()



const CommitteeForm = (props) => {

    const dispatch = useDispatch();
    const [image, onImage] = useState();
    const [newUrl, onImageUrlChange] = useState('');


    const [state, setState] = useState({
        confirmDirty: false,
        autoCompleteResult: [],
        uploading: false
    });

    const { getFieldDecorator } = props.form;
    const { autoCompleteResult } = state;

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFieldsAndScroll(async (err, values) => {
            if (!err) {
                delete values.prefix;
                delete values.confirm
                data.append('name', values.name)
                data.append('email', values.email)
                data.append('mobile', values.mobile)
                data.append('college', values.college)
                data.append('designation', values.designation)
                data.append('password', values.password)
                data.append('image', image)
                const res = await axios.post('http://localhost:2000/api/committee/register', data);
                if (res.data.message === 'Registered') {
                    message.success("Success!")
                    history.goBack();
                }
                else
                    message.success("Something wrong happened, Try again!")
            }
        });

    };

    const customRequest = (options) => {
        console.log(options.file)
        data.append('file', options.file)
    }

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


    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 8,
            },

        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 16,
            },
            lg: {
                span: props.windowWidth > 1100 ? 10 : 16
            }
        },
    };

    const handleEditPicture = () => {
        const fileInput = document.getElementById('imageChange');
        fileInput.click();
    }
    const onImageChange = (e) => {
        onImage(e.target.files[0]);
        const url = URL.createObjectURL(e.target.files[0]);
        onImageUrlChange(url);
    }

    return (
        <div className="CommitteeForm">
            <h3>Register A New Committee Member</h3>
            <div className="CommitteeForm__grid animated fadeIn">
                <Form {...formItemLayout} onSubmit={handleSubmit} style={{ marginTop: "1rem" }} >
                    <Form.Item label="Name">
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Please Enter your Name!', whitespace: true }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="Phone Number">
                        {getFieldDecorator('mobile', {
                            rules: [{ required: true, message: 'Please input your phone number!' }],
                        })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                    </Form.Item>
                    <Form.Item label="Email ID">
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: 'Please input your email Id!' }],
                        })(<Input style={{ width: '100%' }} />)}
                    </Form.Item>
                    <Form.Item label="college">
                        {getFieldDecorator('college', {
                            rules: [{ required: true, message: 'Please Select your College!' }],
                        })(<Select placeholder="Select your College" style={{ width: '70%' }}>
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
                        </Select>)}
                    </Form.Item>
                    <Form.Item label="designation">
                        {getFieldDecorator('designation', {
                            rules: [{ required: true, message: 'Please Select Your Designation!' }],
                        })(<Select placeholder="Select your College" style={{ width: '70%' }}>
                            <Option key={1} value="vice-chancellor">
                                Vice Chancellor
                        </Option>
                            <Option key={2} value="chairperson">
                                Chairperson
                        </Option>
                            <Option key={3} value="professor">
                                Professor
                        </Option>
                            <Option key={4} value="dean">
                                Dean
                        </Option>
                        </Select>)}
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
                    <Form.Item label="Profile Image">
                        <>
                            <input type="file" hidden="hidden" name="" id="imageChange" onChange={onImageChange} />
                            <Button icon="upload" onClick={handleEditPicture}>{'edit image'}</Button>
                        </>
                    </Form.Item>
                    <div className='CommitteeForm__register'>
                        <Button type="primary" htmlType="submit" size="large" shape="round">
                            Register
                </Button>
                    </div>
                </Form>
                {props.windowWidth > 1100 &&
                    <div className="CommitteeForm__background">
                        {!!newUrl ? <img src={newUrl} alt="" /> : <img src={process.env.PUBLIC_URL + '/committeeRegister.svg'} alt="" />}
                    </div>
                }
            </div>
        </div>
    );
}

export default Form.create({ name: 'register' })(windowSize(CommitteeForm));
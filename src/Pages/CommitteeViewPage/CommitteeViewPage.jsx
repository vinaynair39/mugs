import React, { useState } from 'react';
import Layout from '../../containers/Layout/Layout';
import { Button, Popconfirm, Input, Select, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';


import './CommitteViewPage.scss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {Spinner} from '../../components/Loader/Loader';


const { Option } = Select;

const CommitteeViewPage = () => {
    const [startEdit, setStartEdit] = useState(false);
    const [image, onImage] = useState();
    const [newUrl, onImageUrlChange] = useState('');

    const params = useParams()
    const formData = new FormData()
    const data = useSelector(state => state.grievances.committees.filter(x => x._id === params.id))

    const { imageUrl, name, email, mobile, college, designation } = data.length > 0 && data[0];

    const [values, setValues] = useState({ imageUrl, name, email, mobile, college, designation, password: '' })


    const onEdit = () => {
        setStartEdit(true)
    }
    const handleChange = ({ target: { value, name } }) => {
        setValues({ ...values, [name]: value })
    }

    const handleChangeCollege = (value) => {
        setValues({ ...values, college: value })
    }
    const handleChangeDesignation = (value) => {
        setValues({ ...values, designation: value })
    }
    const handleEditPicture = () => {
        const fileInput = document.getElementById('imageChange');
        fileInput.click();
    }
    const onImageChange = (e) => {
        onImage(e.target.files[0]);
        const url = URL.createObjectURL(e.target.files[0]);
        onImageUrlChange(url);
    }
    const onSubmit = async () => {
        setStartEdit(false)
        !!image && formData.append('image', image, image.name);
        formData.append('name', values.name)
        formData.append('email', values.email)
        formData.append('mobile', values.mobile)
        formData.append('college', values.college)
        formData.append('designation', values.designation)
        values.password.length > 0 && formData.append('password', values.password)
        formData.append('id', params.id)
        const res = await axios.post('http://localhost:2000/api/committee/register', formData);
    }

    return (
        <Layout>
            {data.length > 0 ? <>
                <div className="CommitteeViewPage animated fadeIn">
                    {console.log(values)}
                    <div className="CommitteeViewPage__image">
                        <img src={newUrl || imageUrl} alt="" />
                        {startEdit && <>
                            <input type="file" hidden="hidden" name="" id="imageChange" onChange={onImageChange} />
                            <Button className="btn third" onClick={handleEditPicture}>{'edit image'}</Button></>}
                    </div>
                    <div className="CommitteeViewPage__content">
                        <div className="CommitteeViewPage__name">
                            <span>Name:</span> {startEdit ? <Input placeholder="Basic usage" name="name" value={values.name} onChange={handleChange} style={{ width: '15vw' }} /> : name}
                        </div>
                        <div className="CommitteeViewPage__email">
                            <span>Email:</span> {startEdit ? <Input type="email" placeholder="Basic usage" name="email" value={values.email} onChange={handleChange} style={{ width: '15vw' }} /> : email}
                        </div>
                        <div className="CommitteeViewPage__phone">
                            <span>Phone:</span> {startEdit ? <Input type="number" placeholder="Basic usage" name="mobile" value={values.mobile} onChange={handleChange} style={{ width: '15vw' }} /> : mobile}
                        </div>
                        <div className="CommitteeViewPage__name">
                            <span>College:</span> {startEdit ? <Select placeholder="college" name="college" value={values.college} onChange={handleChangeCollege} style={{ width: '15vw' }}>
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
                            </Select> : college}
                        </div>
                        <div className="CommitteeViewPage__email">
                            <span>Designation:</span> {startEdit ? <Select placeholder="Designation" name="designation" value={values.designation} onChange={handleChangeDesignation} style={{ width: '15vw' }}>
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
                            </Select> : designation}
                        </div>
                        <div className="CommitteeViewPage__phone">
                            <span>Password:</span> {startEdit ? <Input placeholder="Password" value={values.password} name="password" onChange={handleChange} style={{ width: '15vw' }} /> : '********'}
                        </div>
                    </div>
                </div>
                <div className="CommitteeViewPage__buttons">
                    <Popconfirm
                        title="Are you sure about removing this member?"
                        okText="Yes"
                        // onConfirm={onBadgeClick}
                        cancelText="No"
                    >
                        <Button type="primary" icon="close" style={{ background: "#DC143C", borderColor: "#DC143C" }}>Remove</Button></Popconfirm>
                    {
                        startEdit ? <Button type="primary" icon="save" onClick={onSubmit} style={{ backgroundColor: '#52c41a', color: "#fff", borderColor: "#52c41a" }}>Save</Button>
                            : <Button type="primary" icon="edit" onClick={onEdit} style={{ backgroundColor: '#52c41a', color: "#fff", borderColor: "#52c41a" }}>{"Edit"}</Button>

                    }
                </div></> : <Spinner />}
        </Layout>
    );
}

export default CommitteeViewPage;
import React, { useState } from 'react';
import Layout from '../../containers/Layout/Layout';
import { Button, Popconfirm, Input, Select } from 'antd'
import { UserOutlined } from '@ant-design/icons';

import './CommitteViewPage.scss';

const i = 1;
const data = {
    imageUrl: "https://image.flaticon.com/icons/svg/2622/2622167.svg",
    name: `committee ${i}`,
    email: `email${i}.com`,
    phone: '771500103',
    college: 'sies',
    designation: 'professor',
    id: i
}

const { Option } = Select;

const CommitteeViewPage = () => {
    const { imageUrl, name, email, phone, college, designation } = data;
    const [startEdit, setStartEdit] = useState(false);

    const onEdit = () => {
        setStartEdit(true)
    }

    return (
        <Layout>
            <div className="CommitteeViewPage">
                {console.log(startEdit)}
                <div className="CommitteeViewPage__image">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="CommitteeViewPage__content">
                    <div className="CommitteeViewPage__name">
                        <span>Name:</span> {startEdit ? <Input placeholder="Basic usage" value={name} style={{ width: '15vw' }} /> : name}
                    </div>
                    <div className="CommitteeViewPage__email">
                        <span>Email:</span> {startEdit ? <Input type="email" placeholder="Basic usage" value={email} style={{ width: '15vw' }} /> : email}
                    </div>
                    <div className="CommitteeViewPage__phone">
                        <span>Phone:</span> {startEdit ? <Input type="number" placeholder="Basic usage" value={phone} style={{ width: '15vw' }} /> : phone}
                    </div>
                    <div className="CommitteeViewPage__name">
                        <span>College:</span> {startEdit ? <Select placeholder="college" value={college} style={{ width: '15vw' }}>
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
                        <span>Designation:</span> {startEdit ? <Select placeholder="college" value={designation} style={{ width: '15vw' }}>
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
                        <span>Password:</span> {startEdit ? <Input placeholder="Password" value={'********'} style={{ width: '15vw' }} /> : '********'}
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
                <Button type="primary" icon="edit" onClick={onEdit} style={{ backgroundColor: '#52c41a', color: "#fff", borderColor: "#52c41a" }}>Edit</Button>
            </div>
        </Layout>
    );
}

export default CommitteeViewPage;
import React, { useState } from 'react';
import Layout from '../../containers/Layout/Layout';
import { Button, Popconfirm, Input } from 'antd'
import { UserOutlined } from '@ant-design/icons';

import './CommitteViewPage.scss';

const i = 1;
const data = {
    imageUrl: "https://image.flaticon.com/icons/svg/2622/2622167.svg",
    name: `committee ${i}`,
    email: `email${i}.com`,
    phone: '771500103',
    id: i
}

const CommitteeViewPage = () => {
    const { imageUrl, name, email, phone } = data;
    const [startEdit, setStartEdit] = useState(false);

    const onEdit = ()  => {
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
                        <span>Name:</span> { startEdit ? <Input placeholder="Basic usage" value={name} style={{width: '15vw'}} /> : name}
                    </div>
                    <div className="CommitteeViewPage__email">
                        <span>Email:</span> { startEdit ? <Input type="email" placeholder="Basic usage" value={email} style={{width: '15vw'}} /> : email}
                    </div>
                    <div className="CommitteeViewPage__phone">
                        <span>Phone:</span> { startEdit ? <Input type="number" placeholder="Basic usage" value={phone} style={{width: '15vw'}} /> : phone}
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
                    <Button type="primary" icon="cross" style={{ background: "#DC143C", borderColor: "#DC143C" }}>Remove</Button></Popconfirm>
                <Button type="primary" icon="edit" onClick={onEdit} style={{ backgroundColor: '#52c41a', color: "#fff", borderColor: "#52c41a" }}>Edit</Button>
            </div>
        </Layout>
    );
}

export default CommitteeViewPage;
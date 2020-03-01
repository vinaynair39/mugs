import React from 'react';
import Layout from '../../containers/Layout/Layout';
import { Button, Popconfirm } from 'antd'
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

    return (
        <Layout>
            <div className="CommitteeViewPage">
                <div className="CommitteeViewPage__image">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="CommitteeViewPage__content">
                    <div className="CommitteeViewPage__name">
                        <span>Name:</span> {name}
                    </div>
                    <div className="CommitteeViewPage__email">
                        <span>Email:</span> {email}
                    </div>
                    <div className="CommitteeViewPage__phone">
                        <span>Phone:</span> {phone}
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
                <Button type="primary" icon="edit" style={{ backgroundColor: '#52c41a', color: "#fff", borderColor: "#52c41a" }} >Edit</Button>
            </div>
        </Layout>
    );
}

export default CommitteeViewPage;
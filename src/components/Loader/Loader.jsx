import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './Loader.scss'


const antIcon = <LoadingOutlined style={{ fontSize: 70 }} spin />;

const Loader = () => {
    return (  
        <div className="spin_loader">
            <Spin size="large" indicator={antIcon} className="spin_loader"/>
        </div>
    );
}

export default Loader;
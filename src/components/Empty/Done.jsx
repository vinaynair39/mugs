import React from 'react'
import { Result, Button } from 'antd';

import './Done.scss'
import Layout from '../../containers/Layout/StudentLayout';
import { Link } from 'react-router-dom';


const Done = () => {
    return (
        <Layout>
            <div className="Done animated fadeIn">
                <div className="Done__text animated fadeInLeft"><span>Successfully</span> Submitted Your Grievance!</div>
                <img className="animated fadeInLeft delay-1s"src={process.env.PUBLIC_URL + '/success.svg'} alt="" />
                <div className="Done__buttons animated fadeIn delay-2s">
                    <Button type="primary" key="console">
                        <Link to='/student/status'>Check Status</Link>
                    </Button>
                    <Button key="buy"><Link to='/student/dashboard'>Add Another</Link></Button>
                </div>
            </div>
        </Layout>
    );
}

export default Done;
import React from 'react';
import { Button } from 'antd'
import Layout from '../../containers/Layout/Layout';
import CommitteeList from '../../components/CommitteeList/CommitteeList';

import './CommitteePage.scss'
import { Link } from 'react-router-dom';

const CommitteePage = () => {
    return (
        <Layout>
            <CommitteeList />
            <div className="CommitteePage__add">
                <Link to="committee/register">
                    <Button type="primary">Add Committee member</Button>
                </Link>
            </div>
        </Layout>
    );
}

export default CommitteePage;
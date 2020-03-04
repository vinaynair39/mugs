import React from 'react';
import { Button } from 'antd'
import Layout from '../../containers/Layout/Layout';
import CommitteeList from '../../components/CommitteeList/CommitteeList';

const CommitteePage = () => {
    return ( 
        <Layout>
            <CommitteeList/>
            <Button>Add Committee member</Button>
        </Layout>
     );
}
 
export default CommitteePage;
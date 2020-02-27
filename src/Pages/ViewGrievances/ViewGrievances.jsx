import React from 'react';
import Filters from '../../containers/Filters/Filters';
import Layout from '../../containers/Layout/Layout';
import List from '../../containers/List/List';

const ViewGrievances = () => {
    return ( 
        <Layout>
        <Filters/>
        <List/>
        </Layout>
     );
}
 
export default ViewGrievances;
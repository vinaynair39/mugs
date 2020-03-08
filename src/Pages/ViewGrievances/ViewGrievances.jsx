import React from 'react';
import moment from 'moment'
import Filters from '../../containers/Filters/Filters';
import Layout from '../../containers/Layout/Layout';
import List from '../../containers/List/List';

const listData = [];
for (let i = 0; i < 50; i++) {
  listData.push({
    id: i,
    title: `Give me back my fees ${i}, Give me back my fees ${i}, Give me back my fees ${i}, Give me back my fees ${i}, Give me back my fees ${i}`,
    name: 'Vinay Nair',
    college: "Ramrao Adik institute of technology",
    status: "submitted",
    subtitle:
      'They took my money and canceled my admission.',
    description:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    submittedOn: moment().calendar()
    });
}

const ViewGrievances = () => {
    return ( 
        <Layout >
        <Filters/>
        <List grievances={listData}/>
        </Layout>
     );
}
 
export default ViewGrievances;
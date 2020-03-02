import React from 'react';
import moment from 'moment'
import List from '../../containers/List/List';
import Layout from '../../containers/Layout/Layout';

const i = 1;
const data = [{
    id: i,
    title: `Give me back my fees ${i}, Give me back my fees ${i}, Give me back my fees ${i}, Give me back my fees ${i}, Give me back my fees ${i}`,
    name: 'Vinay Nair',
    college: "Ramrao Adik institute of technology",
    subtitle:
        'They took my money and canceled my admission.',
    status: "Pending",
    description:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    submittedOn: moment().calendar()
}]

const PendingPage = () => {
    return (
        <Layout>
            <List grievances={data} isSelected={true} />
        </Layout>
    );
}

export default PendingPage;
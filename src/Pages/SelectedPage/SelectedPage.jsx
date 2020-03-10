import React, { useEffect } from 'react';
import moment from 'moment'
import List from '../../containers/List/List';
import Layout from '../../containers/Layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { startGetSelected } from '../../actions/secretary';
import EmptyDashboard from '../../components/Empty/EmptyDashboard';



const SelectedPage = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.grievances.selected)
    useEffect(() => {
        dispatch(startGetSelected())
    }, [])
    return (
        <Layout>
            {data.length > 0 ? <List grievances={data} isSelected={true} />: <EmptyDashboard/>}
        </Layout>
    );
}

export default SelectedPage;
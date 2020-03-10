import React, {useEffect} from 'react';
import moment from 'moment'
import Filters from '../../containers/Filters/Filters';
import Layout from '../../containers/Layout/Layout';
import List from '../../containers/List/List';
import { useDispatch, useSelector } from 'react-redux';
import { startGetGrievances } from '../../actions/secretary';
import EmptyDashboard from '../../components/Empty/EmptyDashboard';

const ViewGrievances = () => {
  const listData = useSelector(state => state.grievances.grievances);
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(startGetGrievances())
  // }, [])
  return (
    <Layout >
      <Filters />
      {listData.length > 0 ? <List grievances={listData}/> : <EmptyDashboard/>}
    </Layout>
  );
}

export default ViewGrievances;
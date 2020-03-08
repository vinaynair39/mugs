import React, {useEffect} from 'react';
import moment from 'moment'
import Filters from '../../containers/Filters/Filters';
import Layout from '../../containers/Layout/Layout';
import List from '../../containers/List/List';
import { useDispatch } from 'react-redux';
import { startGetGrievances } from '../../actions/secretary';

let listData = []
const ViewGrievances = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    listData = dispatch(startGetGrievances())
  }, [])
  return (
    <Layout >
      <Filters />
      <List grievances={listData} />
    </Layout>
  );
}

export default ViewGrievances;
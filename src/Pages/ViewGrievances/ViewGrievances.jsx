import React, { useEffect, useState } from 'react';
import Filters from '../../containers/Filters/Filters';
import Layout from '../../containers/Layout/Layout';
import List from '../../containers/List/List';
import { useDispatch, useSelector } from 'react-redux';
import { startGetGrievances } from '../../actions/secretary';
import EmptyDashboard from '../../components/Empty/EmptyDashboard';
import {Spinner} from '../../components/Loader/Loader';
import addFilter from '../../utils/grievanceSelector'


const ViewGrievances = () => {
  const listData = useSelector(state => addFilter(state.grievances.grievances, state.filters) || []);

  const isLoading = useSelector(state => state.auth.loading)
  const [show, setShow] = useState(false)

  setTimeout(() => {
    setShow(true)
  }, 1000)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(startGetGrievances())
  // }, [])
  return (
    <Layout >
      <Filters />
      <div className="animated fadeIn">
        {isLoading ? <Spinner /> : (listData.length > 0 ? <List grievances={listData} /> : show && <EmptyDashboard />)}
      </div>
    </Layout>
  );
}

export default ViewGrievances;
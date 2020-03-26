import React, { useEffect, useState } from 'react';
import moment from 'moment'
import List from '../../containers/List/List';
import Layout from '../../containers/Layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { startGetSelected } from '../../actions/secretary';
import EmptyDashboard from '../../components/Empty/EmptyDashboard';
import {Spinner} from '../../components/Loader/Loader';




const SelectedPage = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.grievances.selected)
    const isLoading = useSelector(state => state.auth.loading)
    const [show, setShow] = useState(false)

    setTimeout(() => {
        setShow(true)
    }, 1000)
    
    useEffect(() => {
        dispatch(startGetSelected())
    }, [])
    return (
        <Layout>
            <div className="animated fadeIn">
                {isLoading ? <Spinner /> : (data.length > 0 ? <List className="animated fadeIn delay-2s" grievances={data} /> : show && <EmptyDashboard />)}
            </div>
        </Layout>
    );
}

export default SelectedPage;
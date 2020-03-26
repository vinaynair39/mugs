import React, { useState, useEffect } from 'react';
import List from '../../containers/List/List';
import Layout from '../../containers/Layout/Layout';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import EmptyDashboard from '../../components/Empty/EmptyDashboard';
import {Spinner} from '../../components/Loader/Loader';
import { loading } from '../../actions/auth';
import { unLoading } from '../../actions/auth';

const PendingPage = () => {
    const isLoading = useSelector(state => state.auth.loading)
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false)
    const dispatch = useDispatch();

    setTimeout(() => {
        setShow(true)
    }, 1000)
    useEffect(() => {
        const fetchData = async () => {
            dispatch(loading())
            const res = await axios.get('http://localhost:2000/api/grievances/pending')
            setData(res.data);
            dispatch(unLoading())
        };
        fetchData();
    }, []);
    return (
        <Layout>
            <div className="animated fadeIn">

                {isLoading ? <Spinner /> : (data.length > 0 ? <List className="animated fadeIn" grievances={data} /> : show && <EmptyDashboard />)}
            </div>
        </Layout>
    );
}

export default PendingPage;
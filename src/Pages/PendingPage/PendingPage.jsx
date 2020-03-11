import React, { useState, useEffect } from 'react';
import List from '../../containers/List/List';
import Layout from '../../containers/Layout/Layout';
import axios from 'axios';
import { useSelector } from 'react-redux';
import EmptyDashboard from '../../components/Empty/EmptyDashboard';
import Loader from '../../components/Loader/Loader';

const PendingPage = () => {
    const isLoading = useSelector(state => state.auth.isLoading)
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false)

    setTimeout(() => {
        setShow(true)
    }, 1000)
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://localhost:2000/api/grievances/process')
            setData(res.data);
        };
        fetchData();
    }, []);
    return (
        <Layout>
            <div className="animated fadeIn">

                {isLoading ? <Loader /> : (data.length > 0 ? <List className="animated fadeIn" grievances={data} /> : show && <EmptyDashboard />)}
            </div>
        </Layout>
    );
}

export default PendingPage;
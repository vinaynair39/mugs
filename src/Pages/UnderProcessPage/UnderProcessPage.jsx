import React, { useEffect, useState } from 'react';
import axios from 'axios';
import List from '../../containers/List/List';
import Layout from '../../containers/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { startGetUnderProcess } from '../../actions/secretary';
import EmptyDashboard from '../../components/Empty/EmptyDashboard';
import Loader from '../../components/Loader/Loader';



const UnderProcessPage = () => {
    const dispatch = useDispatch();
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
        <>
            <Layout>
                <div className="animated fadeIn">
                    {isLoading ? <Loader /> : (data.length > 0 ? <List className="animated fadeIn" grievances={data} /> : show && <EmptyDashboard />)}
                </div>
            </Layout>
        </>
    );
}

export default UnderProcessPage;
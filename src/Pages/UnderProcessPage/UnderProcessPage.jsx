import React, { useEffect, useState } from 'react';
import axios from 'axios';
import List from '../../containers/List/List';
import Layout from '../../containers/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { startGetUnderProcess } from '../../actions/secretary';
import EmptyDashboard from '../../components/Empty/EmptyDashboard';
import {Spinner} from '../../components/Loader/Loader';
import { loading, unLoading } from '../../actions/auth';



const UnderProcessPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.auth.loading)
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false)

    setTimeout(() => {
        setShow(true)
    }, 1000)
    useEffect(() => {
        const fetchData = async () => {
            dispatch(loading())
            const res = await axios.get('http://localhost:2000/api/grievances/process')
            setData(res.data);
            dispatch(unLoading())
        };
        fetchData();
    }, []);

    return (
        <>
            <Layout>
                <div className="animated fadeIn">
                    {isLoading ? <Spinner /> : (data.length > 0 ? <List className="animated fadeIn" grievances={data} /> : show && <EmptyDashboard />)}
                </div>
            </Layout>
        </>
    );
}

export default UnderProcessPage;
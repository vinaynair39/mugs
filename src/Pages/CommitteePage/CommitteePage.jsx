import React, { useState, useEffect } from 'react';
import { Button } from 'antd'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import EmptyDashboard from '../../components/Empty/EmptyDashboard';
import  { Spinner } from '../../components/Loader/Loader';
import Layout from '../../containers/Layout/Layout';
import CommitteeList from '../../components/CommitteeList/CommitteeList';

import './CommitteePage.scss'
import { getCommittees, unLoading } from '../../actions/secretary';
import { loading } from '../../actions/auth';

const CommitteePage = () => {
    const isLoading = useSelector(state => state.auth.loading)
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false)
    const dispatch = useDispatch(0)

    setTimeout(() => {
        setShow(true)
    }, 1000)
    useEffect(() => {
        const fetchData = async () => {
            dispatch(loading())
            const res = await axios.get('http://localhost:2000/api/committees')
            setData(res.data);
            dispatch(getCommittees(res.data))
            dispatch(unLoading())
        };
        fetchData();
    }, []);
    return (
        <Layout>
            {isLoading ? <Spinner/> : <CommitteeList data={data}/>}
            <div className="CommitteePage__add animated fadeIn">
                <Link to="committee/register">
                    <Button type="primary animated fadeIn delay-1s">Add Committee member</Button>
                </Link>
            </div>
        </Layout>
    );
}

export default CommitteePage;
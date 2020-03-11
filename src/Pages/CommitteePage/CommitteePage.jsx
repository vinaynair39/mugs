import React, { useState, useEffect } from 'react';
import { Button } from 'antd'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import EmptyDashboard from '../../components/Empty/EmptyDashboard';
import Loader from '../../components/Loader/Loader';
import Layout from '../../containers/Layout/Layout';
import CommitteeList from '../../components/CommitteeList/CommitteeList';

import './CommitteePage.scss'
import { getCommittees } from '../../actions/secretary';

const CommitteePage = () => {
    const isLoading = useSelector(state => state.auth.isLoading)
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false)
    const dispatch = useDispatch(0)

    setTimeout(() => {
        setShow(true)
    }, 1000)
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://localhost:2000/api/committees')
            setData(res.data);
            dispatch(getCommittees(res.data))
        };
        fetchData();
    }, []);
    return (
        <Layout>
            <CommitteeList data={data}/>
            <div className="CommitteePage__add">
                <Link to="committee/register">
                    <Button type="primary">Add Committee member</Button>
                </Link>
            </div>
        </Layout>
    );
}

export default CommitteePage;
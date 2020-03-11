import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios'
import Lightbox from 'react-image-lightbox';

import { Button, Popconfirm, message } from 'antd';
import { history } from '../../routers/AppRouter'
import Layout from '../../containers/Layout/Layout';


import './ViewGrievance.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useLastLocation } from 'react-router-last-location';
import { startSelectGrievance, startRejectGrievance } from '../../actions/secretary';
import Loader from '../../components/Loader/Loader'



const ViewGrievance = (props) => {
    const [loading, setLoading] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0)
    const params = useParams()
    const dispatch = useDispatch()
    const lastLocation = useLastLocation()

    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://localhost:2000/api/grievance/' + params.id)
            setData(res.data.grievance);
        };
        fetchData();
    }, []);

    const { title, name, college, timestamp, description, author, _id, documents } = !!data && data;
    const showImage = () => {
        console.log(documents[photoIndex])
        return (
            <Lightbox
                mainSrc={documents[photoIndex]}
                nextSrc={documents[photoIndex + 1]}
                prevSrc={documents[photoIndex - 1]}
                onCloseRequest={() => setLoading(false)}
                onMovePrevRequest={() =>
                    setPhotoIndex(photoIndex - 1)
                }
                onMoveNextRequest={() =>
                    setPhotoIndex(photoIndex + 1)
                }
            />
        )
    }

    function confirm(e) {
        console.log(e);
        history.goBack()
        dispatch(startRejectGrievance(_id, author.email))
        message.success(`Rejected ${_id}`);
    }

    function cancel(e) {
        console.log(e);
    }

    const onSelect = () => {
        message.success(`added to the list`);
        dispatch(startSelectGrievance(_id));
        history.push('/')
    }



    return (
        <Layout>
            {loading && showImage()}
            {!!data ? <div className="ViewGrievance">
                <div className="ViewGrievance__title">
                    {title}
                </div>
                <div className="ViewGrievance__author">
                    <div>
                        <div className="ViewGrievance__name">
                            {author.name}
                        </div>
                        <div className="ViewGrievance__college">
                            {author.college}
                        </div>
                    </div>
                    <div>
                        <div className="ViewGrievance__time">
                            {moment(timestamp).format('LLL')}
                        </div>
                    </div>
                </div>
                <div className="ViewGrievance__description">
                    {description}
                </div>
                <div className="ViewGrievance__file">
                    <Button
                        icon="file"
                        loading={loading}
                        onClick={() => setLoading(true)}
                    > View Document</Button>
                </div>
                <div className="ViewGrievance__submit">
                    <Popconfirm
                        title="Are you sure about rejecting this grievance?"
                        okText="Yes"
                        onConfirm={confirm}
                        onCancel={cancel}
                        cancelText="No"
                    >
                        <Button type="primary" icon="cross" style={{ background: "#DC143C", borderColor: "#DC143C" }}>
                            Reject
                        </Button>
                    </Popconfirm>
                    <Button type="primary" icon="check" onClick={onSelect}>
                        Select
                    </Button>

                </div>
            </div>: <Loader/>}
        </Layout>
    );
}

export default ViewGrievance;
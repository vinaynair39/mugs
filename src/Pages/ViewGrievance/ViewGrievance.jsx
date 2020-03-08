import React, { useState } from 'react';
import moment from 'moment';
import Lightbox from 'react-image-lightbox';

import { Button, Popconfirm, message } from 'antd';
import { history } from '../../routers/AppRouter'
import Layout from '../../containers/Layout/Layout';


import './ViewGrievance.scss';


const ViewGrievance = () => {
    const [loading, setLoading] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0)
    const listData = {
        id: 1, 
        title: `Give me back my fees Give me back my fees`,
        name: 'Vinay Nair',
        college: "Ramrao Adik institute of technology",
        subtitle:
            'They took my money and canceled my admission.',
        description:
            'ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
        submittedOn: moment().calendar(),
        imageUrl:["https://support.joinhandshake.com/hc/article_attachments/115026121948/mceclip4.png", "https://support.joinhandshake.com/hc/article_attachments/115026121948/mceclip4.png" ]
    };


    const { title, name, college, submittedOn, description, imageUrl, id } = listData;

    const showImage = () => {
        return (
            // <Lightbox
            //     medium={imageUrl}
            //     large={imageUrl}
            //     alt="Hello World!"
            //     onClose={() => setLoading(false)}
            // />
            <Lightbox
                mainSrc={imageUrl[photoIndex]}
                nextSrc={imageUrl[photoIndex + 1]}
                prevSrc={imageUrl[photoIndex - 1]}
                onCloseRequest={() => setLoading(false)}
                onMovePrevRequest={() =>
                    setPhotoIndex(photoIndex-1)
                    }
                onMoveNextRequest={() =>
                    setPhotoIndex(photoIndex + 1)
                }
            />
        )
    }

    function confirm(e) {
        console.log(e);
        history.push('/')
        message.success(`Rejected ${id}`);
    }

    function cancel(e) {
        console.log(e);
    }

    const onSelect = () => {
        message.success(`added to the list`);
        history.push('/')
    }



    return (
        <Layout>
            {loading && showImage()}
            <div className="ViewGrievance">
                <div className="ViewGrievance__title">
                    {title}
                </div>
                <div className="ViewGrievance__author">
                    <div>
                        <div className="ViewGrievance__name">
                            {name}
                        </div>
                        <div className="ViewGrievance__college">
                            {college}
                        </div>
                    </div>
                    <div>
                        <div className="ViewGrievance__time">
                            {submittedOn}
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
            </div>
        </Layout>
    );
}

export default ViewGrievance;
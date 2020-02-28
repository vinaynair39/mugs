import React, { useState } from 'react';
import moment from 'moment';
import { Lightbox } from "react-modal-image";

import { Button, Collapse } from 'antd'
import Layout from '../../containers/Layout/Layout';

import './ViewGrievance.scss';

const { Panel } = Collapse;


const ViewGrievance = () => {
    const [loading, setLoading] = useState(false)
    const listData = {
        id: 1,
        title: `Give me back my fees Give me back my fees`,
        name: 'Vinay Nair',
        college: "Ramrao Adik institute of technology",
        subtitle:
            'They took my money and canceled my admission.',
        description:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
        submittedOn: moment().calendar(),
        imageUrl: "https://support.joinhandshake.com/hc/article_attachments/115026121948/mceclip4.png"
    };

    const showImage = () => {
        return (
            <Lightbox
                medium={imageUrl}
                large={imageUrl}
                alt="Hello World!"
                onClose={() => setLoading(false)}
            />
        )
    }


    const { title, subtitle, name, college, submittedOn, description, imageUrl } = listData;
    return (
        <Layout>
            <div className="ViewGrievance">
                <div className="ViewGrievance__title">
                    {title}
                </div>
                <div className="ViewGrievance__subtitle">
                    {subtitle}
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
                {loading &&  showImage()}
                <div className="ViewGrievance_file">
                    <Button
                        type="primary"
                        icon="file"
                        loading={loading}
                        onClick={() => setLoading(true)}
                    > View Document</Button>
                </div>
            </div>
        </Layout>
    );
}

export default ViewGrievance;
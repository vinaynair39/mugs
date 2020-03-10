import React, { useState, useRef } from 'react';
import { Modal, Button, DatePicker, message, Popconfirm } from 'antd';
import moment from 'moment';
import { Link, useLocation } from "react-router-dom";
import './ListItem.scss'
import { useDispatch } from 'react-redux';
import { startSelectGrievance, startDeselectGrievance, startAllocateDate } from '../../actions/secretary';

const ListItem = ({ title, timestamp, onSelect, onRemove, _id, status, author }) => {

    const [allotedDate, setAllotedDate] = useState(null);
    const dispatch = useDispatch();
    const location = useLocation();
    const [selected, setSelected] = useState(status === 0 && location.pathname === '/dashboard' ? true : false);


    const onBadgeClick = () => {
        message.success(`Removed`);
        setSelected(false)
        dispatch(startDeselectGrievance(_id))
    }
    const onStarClick = () => {
        setSelected(true);
        dispatch(startSelectGrievance(_id));
    }

    const onSubmit = () => {
        allotedDate == null ? Modal.error({
            title: 'Please enter a date to assess this Grievance',
        }) : sendDate();
    }

    const sendDate = () => {
        const date = moment(allotedDate).format("LLL")
        dispatch(startAllocateDate(_id, allotedDate, author.email, date));
        setSelected(true)
    }

    function onChange(value, date) {
        const dateString = moment(date + value).valueOf();
        setAllotedDate(dateString);
    }

    return (

        <div className="ListItem">
            <div className="ListItem__content">
                <Link to={`../view/${_id}`} style={{ color: "#5a6270" }}>
                    <div className="ListItem__content-title">
                        {title}
                    </div>
                </Link>
                <div className="ListItem__content-extra">
                    <div className="ListItem__content-time">
                        {moment(timestamp).format('LLL')}
                    </div>

                    {location.pathname !== '/dashboard' && <>
                        <div className="ListItem__content-time">
                            <DatePicker format="DD-MMM-YY HH:mm:ss" placeholder="Allot Date" onChange={onChange} showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }} />
                        </div>
                    </>
                    }
                    <Link to={`../view/${_id}`} style={{ color: "#5a6270" }}>
                    <div className="ListItem__content-status">
                        status: <span>{status == -1 ? 'New' : 'under process'}</span>
                    </div>
                    </Link>

            </div>

        </div>
        <div className="ListItem__select">
            {selected ? <Popconfirm
                title="Are you sure about removing this?"
                okText="Yes"
                onConfirm={onBadgeClick}
                cancelText="No"
            >
                <Button type="link" shape="circle" icon="check" style={{ backgroundColor: '#52c41a', color: "#fff" }} />
            </Popconfirm>
                : <>{location.pathname !== '/dashboard' ? <Button onClick={onSubmit}>{location.pathname === '/pending' ? 'Submit Again' : 'submit'}</Button> : <Button type="link" icon="star" onClick={onStarClick} />}</>}

        </div>
        </div >
    );
}

export default ListItem;
import React, { useState, useRef } from 'react';
import { Modal, Button, DatePicker, message, Popconfirm } from 'antd';
import moment from 'moment';
import { Link, useLocation } from "react-router-dom";
import './ListItem.scss'

const ListItem = ({ title, submittedOn, onSelect, onRemove, id, status}) => {

    const [selected, setSelected] = useState(status === 'Under Process' ? true: false);
    const [allotedDate, setAllotedDate] = useState(null);
    const location = useLocation();

    const onBadgeClick = () => {
        message.success(`Removed`);
        setSelected(false)
        onRemove(id)
    }
    const onStarClick = () => {
        setSelected(true);
        onSelect(id)
    }

    const onSubmit = () => {
        allotedDate == null ? Modal.error({
            title: 'Please enter a date to assess this Grievance',
        }) : setSelected(true);

    }

    function onChange(date) {
        const dateString = moment(date).format('Do MMMM YYYY');
        setAllotedDate(dateString);
    }

    return (

        <div className="ListItem">
            <div className="ListItem__content">
                <Link to={`../view/${id}`} style={{ color: "#5a6270" }}>
                    <div className="ListItem__content-title">
                        {title}
                    </div>
                </Link>
                <div className="ListItem__content-extra">
                    <div className="ListItem__content-time">
                        {submittedOn}
                    </div>
                    {location.pathname !== '/' && <>
                        <div className="ListItem__content-time">
                            <DatePicker placeholder="Allot Date" onChange={onChange} />
                        </div>
                        <div className="ListItem__content-status">
                            status: <span>{status}</span>
                        </div>
                    </>}
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
                    : <>{location.pathname !== '/' ? <Button onClick={onSubmit}>{location.pathname === '/pending' ? 'Submit Again' : 'submit'}</Button> :<Button type="link" icon="star" onClick={onStarClick} />}</> }
                
            </div>
        </div>
    );
}

export default ListItem;
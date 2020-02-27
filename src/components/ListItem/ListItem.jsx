import React, { useState, useRef } from 'react';
import { Icon, Button, Badge } from 'antd'
import { Link } from "react-router-dom";
import './ListItem.scss'

const ListItem = ({ title, subtitle, submittedOn, count, onSelect, onRemove, id }) => {
    const [selected, setSelected] = useState(false);
    const badge = useRef(null)
    const star = useRef(null)
    const onBadgeClick = () => {
        setSelected(!selected);
        onRemove(id)
    }
    const onStarClick = () => {
        setSelected(!selected);
        onSelect(id)
    }
    return (

        <div className="ListItem">
            <Link to={`../view/${id}`} style={{ color: "#5a6270" }}>
                <div className="ListItem__content">
                    <div className="ListItem__content-title">
                        {title}
                    </div>
                    <div className="ListItem__content-subtitle">
                        {subtitle}
                    </div>
                    <div className="ListItem__content-time">
                        {submittedOn}
                    </div>
                </div>
            </Link>
            <div className="ListItem__select">
                {selected ? <Button type="link" ref={badge} shape="circle" icon="check" onClick={onStarClick} style={{ backgroundColor: '#52c41a', color: "#fff" }} onClick={onBadgeClick} /> : <Button type="link" ref={star} icon="star" onClick={onStarClick} />}
            </div>
        </div>
    );
}

export default ListItem;
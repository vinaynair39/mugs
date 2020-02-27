import React, { useState } from 'react';
import { Icon, Button, Badge } from 'antd'
import { Link } from "react-router-dom";
import './ListItem.scss'

const ListItem = ({ title, subtitle, submittedOn, count, onSelect, onRemove, id }) => {
    const [selected, setSelected] = useState(false);
    const onBadgeClick = () => {
        setSelected(!selected);
        onRemove(id)
    }

    const onStarClick = () => {
        setSelected(!selected);
        onSelect(id)
    }
    return (
        <Link to={`../view/${id}`} style={{color: "#5a6270"}}>
        <div className="ListItem">
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
            <div className="ListItem__select">
                {selected ? <Button type="link" shape="circle" icon="check" onClick={onStarClick} style={{ backgroundColor: '#52c41a', color: "#fff" }} onClick={onBadgeClick} /> : <Button type="link" icon="star" onClick={onStarClick} />}
            </div>
        </div>
        </Link>
    );
}

export default ListItem;
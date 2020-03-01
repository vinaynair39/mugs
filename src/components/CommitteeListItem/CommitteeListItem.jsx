import React from 'react'
import './CommitteeListItem.scss'
import { Link } from 'react-router-dom';


const CommitteeListItem = ({ name, email, imageUrl, id }) => {
     
    return (
        <Link to={`/committee/view/${id}`}>
            <div className="CommitteeListItem">
                <div className="CommitteeListItem__image">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="CommitteeListItem__info">
                    <span>{name}</span>
                    <p>{email}</p>
                </div>
            </div>
        </Link>
    );
}

export default CommitteeListItem;
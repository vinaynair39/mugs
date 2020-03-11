import React, { useState, useEffect } from 'react';
import CommitteeListItem from '../CommitteeListItem/CommitteeListItem';
import './CommitteeList.scss'

const CommitteeList = ({data}) => {
    return (
        <div className="CommitteeList">
            {data.map(item => <CommitteeListItem key={item._id} {...item} />)}
        </div>
    );
}

export default CommitteeList;
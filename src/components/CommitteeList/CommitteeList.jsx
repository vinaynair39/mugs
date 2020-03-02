import React from 'react'
import CommitteeListItem from '../CommitteeListItem/CommitteeListItem';

import './CommitteeList.scss'

let data = [];
for(let i = 1; i<=11; i++){
    data.push({
        imageUrl: "https://image.flaticon.com/icons/svg/2622/2622167.svg",
        name: `committee ${i}`,
        email: `email${i}.com`,
        id: i
    })  
}

const CommitteeList = () => {
    return (
        <div className="CommitteeList">
            {data.map(item => <CommitteeListItem key={item.id} {...item}/>)}
        </div>
    );
}

export default CommitteeList;
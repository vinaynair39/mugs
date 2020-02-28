import React, { useState } from 'react';
import { Pagination } from 'antd'
import ListItem from '../../components/ListItem/ListItem';
import moment from 'moment'

import "./List.scss";

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    id: i,
    title: `Give me back my fees ${i}`,
    name: 'Vinay Nair',
    college: "Ramrao Adik institute of technology",
    subtitle:
      'They took my money and canceled my admission.',
    description:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    submittedOn: moment().calendar()
    });
}


const List = () => {
  const [sequence, setSequence] = useState([])
  console.log(sequence)
  return (
    <div className="List">
      {listData.map(item => <ListItem key={item.id} {...item}
        sequence={sequence}
        onSelect={(newElement) => {
          console.log(newElement)
          setSequence([...sequence, newElement])}}
        onRemove={(element) => setSequence(sequence.filter(x => x!== element))}
      />)}
      
    </div>
  );
}

export default List;
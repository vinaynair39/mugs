import React, { useState } from 'react';
import { Pagination } from 'antd'
import ListItem from '../../components/ListItem/ListItem';

import "./List.scss";


const numEachPage = 4   // Use a constant here to keep track of number of cards per page

const List = ({ grievances }) => {

  const [sequence, setSequence] = useState({
    minValue: 0,
    maxValue: 5,
  })

  const handleChange = value => {
    setSequence({
      minValue: (value - 1) * numEachPage,
      maxValue: value * numEachPage
    });
  };
  console.log(sequence)
  return (
    <div className="List">
      {grievances.slice(sequence.minValue, sequence.maxValue).map(item => <ListItem key={item._id} {...item}
      />)}
      <Pagination defaultCurrent={1} defaultPageSize={numEachPage} onChange={handleChange} total={grievances.length} />
    </div>
  );
}

export default List;
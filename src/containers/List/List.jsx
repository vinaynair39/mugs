import React, { useState } from 'react';
import { Pagination } from 'antd'
import ListItem from '../../components/ListItem/ListItem';

import "./List.scss";




const List = ({grievances}) => {
  const [sequence, setSequence] = useState([])
  console.log(sequence)
  return (
    <div className="List">
      {grievances.map(item => <ListItem key={item.id} {...item}
        onSelect={(newElement) => {
          console.log(newElement)
          setSequence([...sequence, newElement])}}
        onRemove={(element) => setSequence(sequence.filter(x => x!== element))}
      />)}   
    </div>
  );
}

export default List;
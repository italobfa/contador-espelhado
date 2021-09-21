import React from 'react';
import {useCount} from '../../context/Count'

function Mirror() {
  const {count} = useCount();

  return (
    <div>
      <span>
        <b>Mirror: {count}</b>
          
        </span> 
    </div>
  );
}

export default Mirror;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { generateList } from '../slices/numberSlice';

const Bt02 = () => {
  const list = useSelector((state: any) => state.numbers.list);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>List number: [{list.join(', ')}]</h2>
      <button onClick={() => dispatch(generateList())}>Random number</button>
    </div>
  );
};

export default Bt02;
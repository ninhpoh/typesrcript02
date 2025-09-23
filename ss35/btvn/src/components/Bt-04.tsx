import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleView } from '../slices/viewSlice';

const Bt04 = () => {
  const mode = useSelector((state: any) => state.view.mode);
  const dispatch = useDispatch();

  const items = ['1', '2', '3', '4'];

  const containerStyle = {
    display: 'flex',
    flexDirection: mode === 'list' ? 'column' : 'row',
    gap: '10px',
    padding: '20px'
  };

  const itemStyle = {
    backgroundColor: 'red',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    width: mode === 'list' ? '100%' : '60px'
  };

  return (
    <div>
      <button onClick={() => dispatch(toggleView())}>
        {mode === 'list' ? 'List mode' : 'Grid mode'}
      </button>
      <div style={containerStyle}>
        {items.map((item) => (
          <div key={item} style={itemStyle}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Bt04;
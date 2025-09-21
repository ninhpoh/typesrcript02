import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter</h2>
      <p>Giá trị hiện tại: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Tăng</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Giảm</button>
    </div>
  );
};

export default Counter;
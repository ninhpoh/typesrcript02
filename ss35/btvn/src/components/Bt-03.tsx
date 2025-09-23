import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../slices/themeSlice';

const Bt03 = () => {
  const mode = useSelector((state: any) => state.theme.mode);
  const dispatch = useDispatch();

  const styles = {
    backgroundColor: mode === 'light' ? '#fff' : '#333',
    color: mode === 'light' ? '#000' : '#fff',
    padding: '20px',
    textAlign: 'center',
    minHeight: '100vh'
  };

  return (
    <div style={styles}>
      <h2>{mode === 'light' ? 'Giao diện sáng' : 'Giao diện tối'}</h2>
      <button onClick={() => dispatch(toggleTheme())}>
        {mode === 'light' ? 'Light' : 'Dark'}
      </button>
    </div>
  );
};

export default Bt03;
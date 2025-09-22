import { combineReducers } from 'redux';
import { studentReducer } from './studentReducer';

const rootReducer = combineReducers({
  listStudent: studentReducer
});

export default rootReducer;
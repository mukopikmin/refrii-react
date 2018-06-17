import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import boxReducer from './boxReducer';

export default combineReducers({
  session: sessionReducer,
  box: boxReducer,
});

import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import boxReducer from './boxReducer';
import foodReducer from './foodReducer';

export default combineReducers({
  session: sessionReducer,
  box: boxReducer,
  food: foodReducer,
});

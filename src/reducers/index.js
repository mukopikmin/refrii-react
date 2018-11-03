import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import boxReducer from './boxReducer';
import foodReducer from './foodReducer';
import unitReducer from './unitReducer';
import apiReducer from './apiReducer';

export default combineReducers({
  session: sessionReducer,
  box: boxReducer,
  food: foodReducer,
  unit: unitReducer,
  api: apiReducer,
});

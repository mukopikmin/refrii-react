import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import boxReducer from './boxReducer';
import foodReducer from './foodReducer';
import userReducer from './userReducer';
import unitReducer from './unitReducer';
import notificationReducer from './notificationReducer';

export default combineReducers({
  session: sessionReducer,
  box: boxReducer,
  food: foodReducer,
  unit: unitReducer,
  user: userReducer,
  notification: notificationReducer,
});

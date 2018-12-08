import sessionAction from './sessionAction';
import boxAction from './boxAction';
import foodAction from './foodAction';
import userAction from './userAction';
import unitAction from './unitAction';
import notificationAction from './notificationAction';

export default {
  ...sessionAction,
  ...boxAction,
  ...foodAction,
  ...unitAction,
  ...userAction,
  ...notificationAction,
};

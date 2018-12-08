import { createActions } from 'redux-actions';
import types from '../actionTypes';

export default createActions({
  [types.NOTIFICATION.SHOW]: message => ({ message }),
  [types.NOTIFICATION.HIDE]: () => ({ }),
});

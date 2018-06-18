import { createActions } from 'redux-actions';
import types from '../actionTypes';

export default createActions({
  [types.REQUEST_UPDATE_FOOD]: food => ({
    food,
  }),
  [types.RECEIVE_UPDATE_FOOD]: () => ({ }),
  [types.FAILED_UPDATE_FOOD]: error => ({
    error,
  }),
});

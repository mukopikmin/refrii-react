import { createActions } from 'redux-actions';
import types from '../actionTypes';

export default createActions({
  [types.REQUEST_GOOGLE_AUTH]: googleToken => ({
    googleToken,
  }),
  [types.RECEIVE_GOOGLE_AUTH]: session => ({
    session,
  }),
  [types.FAILED_GOOGLE_AUTH]: error => ({
    error,
  }),
});

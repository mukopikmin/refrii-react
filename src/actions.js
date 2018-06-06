import { createActions } from 'redux-actions';
import types from './actionTypes';

export default createActions({
  [types.REQUEST_GOOGLE_AUTH]: googleToken => ({
    googleToken,
  }),
  [types.RECEIVE_GOOGLE_AUTH]: credential => ({
    credential,
  }),
  [types.FAILED_GOOGLE_AUTH]: error => ({
    error,
  }),
  [types.REQUEST_GET_BOXES]: credential => ({
    credential,
  }),
  [types.RECEIVE_GET_BOXES]: boxes => ({
    boxes,
  }),
  [types.FAILED_GET_BOXES]: error => ({
    error,
  }),
  [types.SELECT_BOX]: box => ({
    box
  })
});

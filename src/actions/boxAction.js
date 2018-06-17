import { createActions } from 'redux-actions';
import types from '../actionTypes';

export default createActions({
  [types.REQUEST_GET_BOXES]: session => ({
    session,
  }),
  [types.RECEIVE_GET_BOXES]: boxes => ({
    boxes,
  }),
  [types.FAILED_GET_BOXES]: error => ({
    error,
  }),
  [types.SELECT_BOX]: box => ({
    box,
  }),
});

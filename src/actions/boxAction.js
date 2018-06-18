import { createActions } from 'redux-actions';
import types from '../actionTypes';

export default createActions({
  [types.GET_BOXES.REQUEST]: session => ({
    session,
  }),
  [types.GET_BOXES.RECEIVE]: boxes => ({
    boxes,
  }),
  [types.GET_BOXES.FAILED]: error => ({
    error,
  }),
  [types.BOX.SELECT]: box => ({
    box,
  }),
});

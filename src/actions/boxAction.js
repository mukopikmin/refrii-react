import { createActions } from 'redux-actions';
import types from '../actionTypes';

export default createActions({
  [types.BOX.LIST.REQUEST]: session => ({
    session,
  }),
  [types.BOX.LIST.RECEIVE]: boxes => ({
    boxes,
  }),
  [types.BOX.LIST.FAILED]: error => ({
    error,
  }),
  [types.BOX.SELECT]: boxId => ({
    boxId,
  }),
});

import { createActions } from 'redux-actions';
import types from '../actionTypes';

export default createActions({
  [types.UNIT.LIST.REQUEST]: session => ({
    session,
  }),
  [types.UNIT.LIST.RECEIVE]: units => ({
    units,
  }),
  [types.UNIT.LIST.FAILED]: error => ({
    error,
  }),
});

import { createActions } from 'redux-actions';
import types from '../actionTypes';

export default createActions({
  [types.USER.LIST.REQUEST]: () => ({ }),
  [types.USER.LIST.RECEIVE]: users => ({ users }),
  [types.USER.LIST.FAILED]: error => ({ error }),
});

import { createActions } from 'redux-actions';
import types from '../actionTypes';

export default createActions({
  [types.SESSION.FIREBASE_AUTH.REQUEST]: () => ({ }),
  [types.SESSION.FIREBASE_AUTH.RECEIVE]: session => ({ session }),
  [types.SESSION.FIREBASE_AUTH.FAILED]: error => ({ error }),
  [types.SESSION.VERIFY.REQUEST]: () => ({ }),
  [types.SESSION.VERIFY.RECEIVE]: user => ({ user }),
  [types.SESSION.VERIFY.FAILED]: error => ({ error }),
  [types.SESSION.SIGNUP.REQUEST]: () => ({ }),
  [types.SESSION.SIGNUP.RECEIVE]: user => ({ user }),
  [types.SESSION.SIGNUP.FAILED]: error => ({ error }),
  [types.SIGNOUT]: () => ({}),
  [types.USER.LIST.REQUEST]: () => ({ }),
  [types.USER.LIST.RECEIVE]: users => ({ users }),
  [types.USER.LIST.FAILED]: error => ({ error }),
  [types.USER.UPDATE.REQUEST]: (id, name, avatar) => ({ id, name, avatar }),
  [types.USER.UPDATE.RECEIVE]: user => ({ user }),
  [types.USER.UPDATE.FAILED]: error => ({ error }),
});

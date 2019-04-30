import { createActions } from 'redux-actions';
import types from '../actionTypes';

export default createActions({
  [types.SESSION.FIREBASE_AUTH.REQUEST]: () => ({ }),
  [types.SESSION.FIREBASE_AUTH.RECEIVE]: session => ({ session }),
  [types.SESSION.FIREBASE_AUTH.FAILED]: error => ({ error }),
  [types.SESSION.VERIFY.REQUEST]: () => ({ }),
  [types.SESSION.VERIFY.RECEIVE]: user => ({ user }),
  [types.SESSION.VERIFY.FAILED]: error => ({ error }),
  [types.SIGNOUT]: () => ({}),
});

import { createActions } from 'redux-actions';
import types from '../actionTypes';

export default createActions({
  [types.GOOGLE_AUTH.REQUEST]: googleToken => ({ googleToken }),
  [types.GOOGLE_AUTH.RECEIVE]: session => ({ session }),
  [types.GOOGLE_AUTH.FAILED]: error => ({ error }),
  [types.SIGNOUT]: () => ({}),
});

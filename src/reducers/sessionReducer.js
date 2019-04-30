import { handleActions } from 'redux-actions';
import types from '../actionTypes';

const initialState = {
  jwt: null,
  user: null,
  error: null,
};

export default handleActions({
  [types.SESSION.FIREBASE_AUTH.REQUEST]: state => ({ ...state }),
  [types.SESSION.FIREBASE_AUTH.RECEIVE]: (state, action) => ({
    ...state,
    jwt: action.payload.session.ra,
  }),
  [types.SESSION.FIREBASE_AUTH.FAILED]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
  [types.SESSION.VERIFY.REQUEST]: state => ({ ...state }),
  [types.SESSION.VERIFY.RECEIVE]: (state, action) => ({
    ...state,
    user: action.payload.user,
  }),
  [types.SESSION.VERIFY.FAILED]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
  [types.SIGNOUT]: () => ({
    ...initialState,
  }),
}, initialState);

import { handleActions } from 'redux-actions';
import types from '../actionTypes';

const initialState = {
  googleToken: null,
  expiresAt: null,
  jwt: null,
  user: null,
  error: null,
};

export default handleActions({
  [types.GOOGLE_AUTH.REQUEST]: (state, action) => ({
    ...state,
    googleToken: action.payload.googleToken,
  }),
  [types.GOOGLE_AUTH.RECEIVE]: (state, action) => ({
    ...state,
    jwt: action.payload.session.jwt,
    expiresAt: action.payload.session.expires_at,
    user: action.payload.session.user,
  }),
  [types.GOOGLE_AUTH.FAILED]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
  [types.SIGNOUT]: state => ({
    ...initialState,
  }),
}, initialState);

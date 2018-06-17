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
  [types.REQUEST_GOOGLE_AUTH]: (state, action) => ({
    ...state,
    googleToken: action.payload.googleToken,
  }),
  [types.RECEIVE_GOOGLE_AUTH]: (state, action) => ({
    ...state,
    jwt: action.payload.session.jwt,
    expiresAt: action.payload.session.expires_at,
    user: action.payload.session.user,
  }),
  [types.FAILED_GOOGLE_AUTH]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
}, initialState);

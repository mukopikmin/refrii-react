import { handleActions } from 'redux-actions';

import types from './actionTypes';

const initialState = {
  googleToken: null,
  credential: {},
  boxes: [],
  units: [],
  error: null,
  box: null,
  food: null,
};

export default handleActions({
  [types.REQUEST_GOOGLE_AUTH]: (state, action) => ({
    ...state,
    googleToken: action.payload.googleToken,
  }),
  [types.RECEIVE_GOOGLE_AUTH]: (state, action) => ({
    ...state,
    credential: action.payload.credential,
  }),
  [types.FAILED_GOOGLE_AUTH]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
  [types.REQUEST_GET_BOXES]: (state, action) => ({
    ...state,
    credential: action.payload.credential,
  }),
  [types.RECEIVE_GET_BOXES]: (state, action) => ({
    ...state,
    boxes: action.payload.boxes,
  }),
  [types.FAILED_GET_BOXES]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
  [types.SELECT_BOX]: (state, action) => ({
    ...state,
    box: action.payload.box
  })
}, initialState);

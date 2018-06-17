import { handleActions } from 'redux-actions';
import types from '../actionTypes';

const initialState = {
  list: [],
  selected: null,
};

export default handleActions({
  [types.REQUEST_GET_BOXES]: (state, action) => ({
    ...state,
    session: action.payload.session,
  }),
  [types.RECEIVE_GET_BOXES]: (state, action) => ({
    ...state,
    list: action.payload.boxes,
  }),
  [types.FAILED_GET_BOXES]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
  [types.SELECT_BOX]: (state, action) => ({
    ...state,
    selected: action.payload.box,
  }),
}, initialState);

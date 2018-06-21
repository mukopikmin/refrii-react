import { handleActions } from 'redux-actions';
import types from '../actionTypes';

const initialState = {
  list: [],
  selectedId: null,
};

export default handleActions({
  [types.GET_BOXES.REQUEST]: (state, action) => ({
    ...state,
    session: action.payload.session,
  }),
  [types.GET_BOXES.RECEIVE]: (state, action) => ({
    ...state,
    list: action.payload.boxes,
  }),
  [types.GET_BOXES.FAILED]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
  [types.BOX.SELECT]: (state, action) => ({
    ...state,
    selectedId: action.payload.boxId,
  }),
}, initialState);

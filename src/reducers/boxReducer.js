import { handleActions } from 'redux-actions';
import types from '../actionTypes';

const initialState = {
  list: [],
  selectedId: null,
};

export default handleActions({
  [types.BOX.LIST.REQUEST]: (state, action) => ({
    ...state,
    session: action.payload.session,
  }),
  [types.BOX.LIST.RECEIVE]: (state, action) => ({
    ...state,
    list: action.payload.boxes,
  }),
  [types.BOX.LIST.FAILED]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
  [types.BOX.SELECT]: (state, action) => ({
    ...state,
    selectedId: action.payload.boxId,
  }),
}, initialState);

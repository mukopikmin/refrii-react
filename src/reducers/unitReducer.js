import { handleActions } from 'redux-actions';
import types from '../actionTypes';

const initialState = {
  list: [],
};

export default handleActions({
  [types.UNIT.LIST.REQUEST]: (state, action) => ({
    ...state,
    session: action.payload.session,
  }),
  [types.UNIT.LIST.RECEIVE]: (state, action) => ({
    ...state,
    list: action.payload.units,
  }),
  [types.UNIT.LIST.FAILED]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
}, initialState);

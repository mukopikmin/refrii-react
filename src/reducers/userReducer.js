import { handleActions } from 'redux-actions';
import types from '../actionTypes';

const initialState = {
  list: [],
  error: null,
};

export default handleActions({
  [types.USER.LIST.REQUEST]: state => ({ ...state }),
  [types.USER.LIST.RECEIVE]: (state, action) => ({
    ...state,
    list: action.payload.users,
  }),
  [types.USER.LIST.FAILED]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
}, initialState);

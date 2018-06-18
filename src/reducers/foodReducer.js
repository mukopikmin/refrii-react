import { handleActions } from 'redux-actions';
import types from '../actionTypes';

const initialState = {
  target: null,
};

export default handleActions({
  [types.UPDATE_FOOD.REQUEST]: (state, action) => ({
    ...state,
    // target: action.payload.food
  }),
  [types.UPDATE_FOOD.RECEIVE]: (state, action) => ({
    ...state,
    list: action.payload.boxes,
  }),
  [types.UPDATE_FOOD.FAILED]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
}, initialState);

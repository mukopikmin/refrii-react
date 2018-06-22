import { handleActions } from 'redux-actions';
import types from '../actionTypes';

const initialState = {
  target: null,
  isEditFoodModalOpen: false,
};

export default handleActions({
  [types.FOOD.CREATE.REQUEST]: (state, action) => ({
    ...state,
    params: action.payload.params
  }),
  [types.FOOD.CREATE.RECEIVE]: (state, action) => ({
    ...state,
    isEditFoodModalOpen: false
  }),
  [types.FOOD.CREATE.FAILED]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
  [types.FOOD.UPDATE.REQUEST]: (state, action) => ({
    ...state,
  }),
  [types.FOOD.UPDATE.RECEIVE]: (state, action) => ({
    ...state,
    list: action.payload.boxes,
  }),
  [types.FOOD.UPDATE.FAILED]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
  [types.MODAL.EDIT_FOOD.OPEN]: (state, action) => ({
    ...state,
    isEditFoodModalOpen: true,
  }),
  [types.MODAL.EDIT_FOOD.CLOSE]: (state, action) => ({
    ...state,
    isEditFoodModalOpen: false,
  }),
}, initialState);

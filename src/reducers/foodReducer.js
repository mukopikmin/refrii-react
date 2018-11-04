import { handleActions } from 'redux-actions';
import moment from 'moment';
import types from '../actionTypes';
import Food from '../models/food';

const initialParams = {
  id: 0,
  name: '',
  amount: 0,
  unitId: 0,
  userId: 0,
  boxId: 0,
  notice: '',
  needsAdding: false,
  expirationDate: moment().format('YYYY-MM-DD'),
};
const initialState = {
  // list: [],
  isNewFoodModalOpen: false,
  isEditFoodModalOpen: false,
  isAmountFoodModalOpen: false,
  target: null,
  // params: initialParams,
};

export default handleActions({
  // [types.FOOD.LIST.REQUEST]: state => ({
  //   ...state,
  // }),
  // [types.FOOD.LIST.RECEIVE]: (state, action) => ({
  //   ...state,
  //   list: action.payload.foods,
  // }),
  // [types.FOOD.LIST.FAILED]: (state, action) => ({
  //   ...state,
  //   error: action.payload.error,
  // }),
  // [types.FOOD.CREATE.REQUEST]: (state, action) => ({
  //   ...state,
  //   params: action.payload.params,
  // }),
  // [types.FOOD.CREATE.RECEIVE]: state => ({
  //   ...state,
  //   isNewFoodModalOpen: false,
  // }),
  // [types.FOOD.CREATE.FAILED]: (state, action) => ({
  //   ...state,
  //   error: action.payload.error,
  // }),
  // [types.FOOD.UPDATE.REQUEST]: state => ({
  //   ...state,
  // }),
  // [types.FOOD.UPDATE.RECEIVE]: (state, action) => ({
  //   ...state,
  //   isEditFoodModalOpen: false,
  //   params: initialParams,
  // }),
  // [types.FOOD.UPDATE.FAILED]: (state, action) => ({
  //   ...state,
  //   error: action.payload.error,
  // }),
  [types.FOOD.SET_PARAMS]: (state, action) => ({
    ...state,
    target: action.payload.food,
  }),
  [types.MODAL.FOOD.NEW.OPEN]: (state, action) => ({
    ...state,
    isNewFoodModalOpen: true,
    target: Food.mock(),
    // params: action.payload.params || initialParams,
  }),
  [types.MODAL.FOOD.NEW.CLOSE]: state => ({
    ...state,
    isNewFoodModalOpen: false,
    params: initialParams,
  }),
  [types.MODAL.FOOD.EDIT.OPEN]: (state, action) => ({
    ...state,
    isEditFoodModalOpen: true,
    target: action.payload.food,
  }),
  [types.MODAL.FOOD.EDIT.CLOSE]: state => ({
    ...state,
    isEditFoodModalOpen: false,
    target: null,
  }),
  [types.MODAL.FOOD.AMOUNT.OPEN]: (state, action) => ({
    ...state,
    isAmountFoodModalOpen: true,
    target: action.payload.food,
  }),
  [types.MODAL.FOOD.AMOUNT.CLOSE]: state => ({
    ...state,
    isAmountFoodModalOpen: false,
    target: null,
  }),
}, initialState);

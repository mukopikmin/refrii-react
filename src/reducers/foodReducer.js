import { handleActions } from 'redux-actions';
import moment from 'moment'
import types from '../actionTypes';

const initialParams = {
  id: 0,
  name: '',
  amount: 0,
  unitId: 0,
  userId: 0,
  boxId: 0,
  notice: '',
  expirationDate: moment().format('YYYY-MM-DDTHH:mm:SS.sssZ')
}
const initialState = {
  isNewFoodModalOpen: false,
  isEditFoodModalOpen: false,
  params: initialParams
};

export default handleActions({
  [types.FOOD.CREATE.REQUEST]: (state, action) => ({
    ...state,
    params: action.payload.params,
  }),
  [types.FOOD.CREATE.RECEIVE]: (state, action) => ({
    ...state,
    isNewFoodModalOpen: false,
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
    isEditFoodModalOpen: false,
    params: initialParams,
    list: action.payload.boxes,
  }),
  [types.FOOD.UPDATE.FAILED]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
  [types.FOOD.SET_PARAMS]: (state, action) => ({
    ...state,
    params: action.payload.params
  }),
  [types.MODAL.FOOD.NEW.OPEN]: (state, action) => ({
    ...state,
    isNewFoodModalOpen: true,
    params: action.payload.params || initialParams
  }),
  [types.MODAL.FOOD.NEW.CLOSE]: (state, action) => ({
    ...state,
    isNewFoodModalOpen: false,
    params: initialParams
  }),
  [types.MODAL.FOOD.EDIT.OPEN]: (state, action) => ({
    ...state,
    isEditFoodModalOpen: true,
    params: action.payload.params || initialParams
  }),
  [types.MODAL.FOOD.EDIT.CLOSE]: (state, action) => ({
    ...state,
    isEditFoodModalOpen: false,
    params: initialParams
  }),
}, initialState);

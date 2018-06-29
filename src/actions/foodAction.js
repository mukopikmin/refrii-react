import { createActions } from 'redux-actions';
import types from '../actionTypes';

export default createActions({
  [types.FOOD.CREATE.REQUEST]: params => ({ params }),
  [types.FOOD.CREATE.RECEIVE]: food => ({ food }),
  [types.FOOD.CREATE.FAILED]: error => ({ error }),
  [types.FOOD.UPDATE.REQUEST]: params => ({ params }),
  [types.FOOD.UPDATE.RECEIVE]: () => ({ }),
  [types.FOOD.UPDATE.FAILED]: error => ({ error }),
  [types.FOOD.REMOVE.REQUEST]: params => ({ params }),
  [types.FOOD.REMOVE.RECEIVE]: () => ({ }),
  [types.FOOD.REMOVE.FAILED]: error => ({ error }),
  [types.FOOD.SET_PARAMS]: (params) => ({params}),
  [types.MODAL.FOOD.NEW.OPEN]: (params) => ({params}),
  [types.MODAL.FOOD.NEW.CLOSE]: () => ({ }),
  [types.MODAL.FOOD.EDIT.OPEN]: (params) => ({params}),
  [types.MODAL.FOOD.EDIT.CLOSE]: () => ({ }),
});

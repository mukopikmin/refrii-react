import { createActions } from 'redux-actions';
import types from '../actionTypes';

export default createActions({
  [types.FOOD.LIST.REQUEST]: () => ({}),
  [types.FOOD.LIST.RECEIVE]: foods => ({ foods }),
  [types.FOOD.LIST.FAILED]: error => ({ error }),
  [types.FOOD.CREATE.REQUEST]: food => ({ food }),
  [types.FOOD.CREATE.RECEIVE]: food => ({ food }),
  [types.FOOD.CREATE.FAILED]: error => ({ error }),
  [types.FOOD.UPDATE.REQUEST]: food => ({ food }),
  [types.FOOD.UPDATE.RECEIVE]: food => ({ food }),
  [types.FOOD.UPDATE.FAILED]: error => ({ error }),
  [types.FOOD.REMOVE.REQUEST]: food => ({ food }),
  [types.FOOD.REMOVE.RECEIVE]: food => ({ food }),
  [types.FOOD.REMOVE.FAILED]: error => ({ error }),
  [types.FOOD.SET_PARAMS]: food => ({ food }),
});

import { createActions } from 'redux-actions';
import types from '../actionTypes';

export default createActions({
  [types.FOOD.LIST.REQUEST]: () => ({}),
  [types.FOOD.LIST.RECEIVE]: foods => ({ foods }),
  [types.FOOD.LIST.FAILED]: error => ({ error }),
  [types.FOOD.CREATE.REQUEST]: params => ({ params }),
  [types.FOOD.CREATE.RECEIVE]: food => ({ food }),
  [types.FOOD.CREATE.FAILED]: error => ({ error }),
  [types.FOOD.UPDATE.REQUEST]: params => ({ params }),
  [types.FOOD.UPDATE.RECEIVE]: food => ({ food }),
  [types.FOOD.UPDATE.FAILED]: error => ({ error }),
  [types.FOOD.REMOVE.REQUEST]: params => ({ params }),
  [types.FOOD.REMOVE.RECEIVE]: () => ({ }),
  [types.FOOD.REMOVE.FAILED]: error => ({ error }),
  [types.FOOD.SET_PARAMS]: food => ({ food }),
  [types.MODAL.FOOD.NEW.OPEN]: food => ({ food }),
  [types.MODAL.FOOD.NEW.CLOSE]: () => ({ }),
  [types.MODAL.FOOD.EDIT.OPEN]: food => ({ food }),
  [types.MODAL.FOOD.EDIT.CLOSE]: () => ({ }),
  [types.MODAL.FOOD.AMOUNT.OPEN]: food => ({ food }),
  [types.MODAL.FOOD.AMOUNT.CLOSE]: () => ({ }),
});

import { createActions } from 'redux-actions';
import types from '../actionTypes';

export default createActions({
  [types.FOOD.CREATE.REQUEST]: params => ({ params }),
  [types.FOOD.CREATE.RECEIVE]: food => ({ food }),
  [types.FOOD.CREATE.FAILED]: error => ({ error }),
  [types.FOOD.UPDATE.REQUEST]: food => ({ food }),
  [types.FOOD.UPDATE.RECEIVE]: () => ({ }),
  [types.FOOD.UPDATE.FAILED]: error => ({ error }),
  [types.MODAL.EDIT_FOOD.OPEN]: () => ({}),
  [types.MODAL.EDIT_FOOD.CLOSE]: () => ({ }),
});

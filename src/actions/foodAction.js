import { createActions } from 'redux-actions';
import types from '../actionTypes';

export default createActions({
  [types.UPDATE_FOOD.REQUEST]: food => ({
    food,
  }),
  [types.UPDATE_FOOD.RECEIVE]: () => ({ }),
  [types.UPDATE_FOOD.FAILED]: error => ({
    error,
  }),
});

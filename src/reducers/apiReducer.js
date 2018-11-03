import { handleActions } from 'redux-actions';
import moment from 'moment';
import types from '../actionTypes';

const initialState = {
  boxes: [],
  foods: [],
  untis: [],
};

export default handleActions({
  [types.BOX.LIST.RECEIVE]: (state, action) => ({
    ...state,
    boxes: action.payload.boxes,
  }),
  [types.FOOD.LIST.RECEIVE]: (state, action) => ({
    ...state,
    foods: action.payload.foods,
  }),
  [types.UNIT.LIST.RECEIVE]: (state, action) => ({
    ...state,
    units: action.payload.units,
  }),
}, initialState);

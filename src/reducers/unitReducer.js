import { handleActions } from "redux-actions";
import types from "../actionTypes";

const initialState = {
  list: []
};

export default handleActions(
  {
    [types.UNIT.LIST.REQUEST]: state => ({ ...state }),
    [types.UNIT.LIST.RECEIVE]: (state, action) => ({
      ...state,
      list: action.payload.units
    }),
    [types.UNIT.LIST.FAILED]: (state, action) => ({
      ...state,
      error: action.payload.error
    }),
    [types.UNIT.CREATE.REQUEST]: state => ({ ...state }),
    [types.UNIT.CREATE.RECEIVE]: (state, action) => ({
      ...state,
      list: state.list.concat([action.payload.unit]),
      isNewUnitModalOpen: false
    }),
    [types.UNIT.CREATE.FAILED]: (state, action) => ({
      ...state,
      error: action.payload.error
    }),
    [types.UNIT.UPDATE.REQUEST]: state => ({ ...state }),
    [types.UNIT.UPDATE.RECEIVE]: (state, action) => {
      const list = state.list.concat([]);
      const { unit } = action.payload;
      const index = list.map(u => u.id).indexOf(unit.id);

      list[index] = unit;

      return {
        ...state,
        list,
        isEditUnitModalOpen: false
      };
    },
    [types.UNIT.UPDATE.FAILED]: (state, action) => ({
      ...state,
      error: action.payload.error
    }),
    [types.UNIT.REMOVE.REQUEST]: state => ({ ...state }),
    [types.UNIT.REMOVE.RECEIVE]: (state, action) => ({
      ...state,
      list: state.list.filter(unit => unit.id !== action.payload.id),
      isEditUnitModalOpen: false
    }),
    [types.UNIT.REMOVE.FAILED]: (state, action) => ({
      ...state,
      isEditUnitModalOpen: false,
      error: action.payload.error
    })
  },
  initialState
);

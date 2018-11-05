import { handleActions } from 'redux-actions';
import types from '../actionTypes';
import Unit from '../models/unit';

const initialState = {
  list: [],
  isNewUnitModalOpen: false,
  isEditUnitModalOpen: false,
  target: null,
};

export default handleActions({
  [types.UNIT.LIST.REQUEST]: (state, action) => ({
    ...state,
    session: action.payload.session,
  }),
  [types.UNIT.LIST.RECEIVE]: (state, action) => ({
    ...state,
    list: action.payload.units,
  }),
  [types.UNIT.LIST.FAILED]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
  [types.UNIT.CREATE.REQUEST]: state => ({
    ...state,
  }),
  [types.UNIT.CREATE.RECEIVE]: state => ({
    ...state,
    isNewUnitModalOpen: false,
  }),
  [types.UNIT.CREATE.FAILED]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
  [types.UNIT.UPDATE.REQUEST]: state => ({
    ...state,
  }),
  [types.UNIT.UPDATE.RECEIVE]: state => ({
    ...state,
    isEditUnitModalOpen: false,
  }),
  [types.UNIT.UPDATE.FAILED]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
  [types.UNIT.REMOVE.REQUEST]: state => ({
    ...state,
  }),
  [types.UNIT.REMOVE.RECEIVE]: state => ({
    ...state,
    isEditUnitModalOpen: false,
  }),
  [types.UNIT.REMOVE.FAILED]: (state, action) => ({
    ...state,
    isEditUnitModalOpen: false,
    error: action.payload.error,
  }),
  [types.MODAL.UNIT.NEW.OPEN]: state => ({
    ...state,
    isNewUnitModalOpen: true,
    target: Unit.mock(),
  }),
  [types.MODAL.UNIT.NEW.CLOSE]: state => ({
    ...state,
    isNewUnitModalOpen: false,
    target: null,
  }),
  [types.MODAL.UNIT.EDIT.OPEN]: (state, action) => ({
    ...state,
    isEditUnitModalOpen: true,
    target: action.payload.unit,
  }),
  [types.MODAL.UNIT.EDIT.CLOSE]: state => ({
    ...state,
    isEditUnitModalOpen: false,
    target: null,
  }),
}, initialState);

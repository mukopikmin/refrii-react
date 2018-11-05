import { handleActions } from 'redux-actions';
import types from '../actionTypes';

const initialParams = {
  id: 0,
  label: '',
  step: undefined,
};
const initialState = {
  list: [],
  isNewUnitModalOpen: false,
  isEditUnitModalOpen: false,
  target: null,
  // params: initialParams,
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
  [types.UNIT.CREATE.REQUEST]: (state, action) => ({
    ...state,
    params: action.payload.params,
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
    params: initialParams,
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
  // [types.UNIT.SET_PARAMS]: (state, action) => ({
  //   ...state,
  //   params: action.payload.params,
  // }),
  [types.MODAL.UNIT.NEW.OPEN]: (state, action) => ({
    ...state,
    isNewUnitModalOpen: true,
    params: action.payload.params || initialParams,
  }),
  [types.MODAL.UNIT.NEW.CLOSE]: state => ({
    ...state,
    isNewUnitModalOpen: false,
    params: initialParams,
  }),
  [types.MODAL.UNIT.EDIT.OPEN]: (state, action) => ({
    ...state,
    isEditUnitModalOpen: true,
    params: action.payload.params || initialParams,
  }),
  [types.MODAL.UNIT.EDIT.CLOSE]: state => ({
    ...state,
    isEditUnitModalOpen: false,
    params: initialParams,
  }),
}, initialState);

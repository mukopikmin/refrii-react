import { handleActions } from 'redux-actions';
import types from '../actionTypes';

const initialParams = {
  id: 0,
  name: '',
  notice: '',
};
const initialState = {
  list: [],
  selectedId: null,
  isNewBoxModalOpen: false,
  isEditBoxModalOpen: false,
  params: initialParams,
};

export default handleActions({
  [types.BOX.LIST.REQUEST]: (state, action) => ({
    ...state,
    session: action.payload.session,
  }),
  [types.BOX.LIST.RECEIVE]: (state, action) => ({
    ...state,
    list: action.payload.boxes,
  }),
  [types.BOX.LIST.FAILED]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
  [types.BOX.CREATE.REQUEST]: (state, action) => ({
    ...state,
    params: action.payload.params,
  }),
  [types.BOX.CREATE.RECEIVE]: state => ({
    ...state,
    isNewBoxModalOpen: false,
  }),
  [types.BOX.CREATE.FAILED]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
  [types.BOX.UPDATE.REQUEST]: state => ({
    ...state,
  }),
  [types.BOX.UPDATE.RECEIVE]: state => ({
    ...state,
    isEditBoxModalOpen: false,
    params: initialParams,
  }),
  [types.BOX.UPDATE.FAILED]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
  [types.BOX.REMOVE.REQUEST]: state => ({
    ...state,
  }),
  [types.BOX.REMOVE.RECEIVE]: state => ({
    ...state,
    isEditBoxModalOpen: false,
  }),
  [types.BOX.REMOVE.FAILED]: (state, action) => ({
    ...state,
    isEditBoxModalOpen: false,
    error: action.payload.error,
  }),
  [types.BOX.INVITE.REQUEST]: state => ({
    ...state,
  }),
  [types.BOX.INVITE.RECEIVE]: state => ({
    ...state,
  }),
  [types.BOX.INVITE.FAILED]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
  [types.BOX.SELECT]: (state, action) => ({
    ...state,
    selectedId: action.payload.boxId,
  }),
  [types.BOX.SET_PARAMS]: (state, action) => ({
    ...state,
    params: action.payload.params,
  }),
  [types.MODAL.BOX.NEW.OPEN]: (state, action) => ({
    ...state,
    isNewBoxModalOpen: true,
    params: action.payload.params || initialParams,
  }),
  [types.MODAL.BOX.NEW.CLOSE]: state => ({
    ...state,
    isNewBoxModalOpen: false,
    params: initialParams,
  }),
  [types.MODAL.BOX.EDIT.OPEN]: (state, action) => ({
    ...state,
    isEditBoxModalOpen: true,
    params: action.payload.params || initialParams,
  }),
  [types.MODAL.BOX.EDIT.CLOSE]: state => ({
    ...state,
    isEditBoxModalOpen: false,
    params: initialParams,
  }),
}, initialState);

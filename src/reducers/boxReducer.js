import { handleActions } from 'redux-actions';
import types from '../actionTypes';
import Box from '../models/box';

const initialState = {
  list: [],
  isNewBoxModalOpen: false,
  isEditBoxModalOpen: false,
  isInvitationDialogOpen: false,
  target: null,
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
  [types.BOX.CREATE.REQUEST]: state => ({
    ...state,
  }),
  [types.BOX.CREATE.RECEIVE]: state => ({
    ...state,
    isNewBoxModalOpen: false,
  }),
  [types.BOX.CREATE.FAILED]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
  [types.BOX.UPDATE.REQUEST]: state => ({ ...state }),
  [types.BOX.UPDATE.RECEIVE]: state => ({
    ...state,
    isEditBoxModalOpen: false,
  }),
  [types.BOX.UPDATE.FAILED]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
  [types.BOX.REMOVE.REQUEST]: state => ({ ...state }),
  [types.BOX.REMOVE.RECEIVE]: state => ({
    ...state,
    isEditBoxModalOpen: false,
  }),
  [types.BOX.REMOVE.FAILED]: (state, action) => ({
    ...state,
    isEditBoxModalOpen: false,
    error: action.payload.error,
  }),
  [types.BOX.INVITE.REQUEST]: state => ({ ...state }),
  [types.BOX.INVITE.RECEIVE]: state => ({ ...state }),
  [types.BOX.INVITE.FAILED]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
  [types.BOX.SELECT]: (state, action) => ({
    ...state,
    target: action.payload.box,
  }),
  [types.MODAL.BOX.NEW.OPEN]: (state, action) => ({
    ...state,
    isNewBoxModalOpen: true,
    target: action.payload.target || Box.mock(),
  }),
  [types.MODAL.BOX.NEW.CLOSE]: state => ({
    ...state,
    isNewBoxModalOpen: false,
  }),
  [types.MODAL.BOX.EDIT.OPEN]: state => ({
    ...state,
    isEditBoxModalOpen: true,
  }),
  [types.MODAL.BOX.EDIT.CLOSE]: state => ({
    ...state,
    isEditBoxModalOpen: false,
  }),
  [types.MODAL.BOX.INVITE.OPEN]: state => ({
    ...state,
    isInvitationDialogOpen: true,
  }),
  [types.MODAL.BOX.INVITE.CLOSE]: state => ({
    ...state,
    isInvitationDialogOpen: false,
  }),
}, initialState);

import { handleActions } from 'redux-actions';
import types from '../actionTypes';

const initialState = {
  list: [],
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
  [types.BOX.UPDATE.RECEIVE]: (state, action) => {
    const list = state.list.concat([]);
    const { box } = action.payload;
    const index = list.map(b => b.id).indexOf(box.id);

    list[index] = box;

    return {
      ...state,
      list,
      isEditBoxModalOpen: false,
    };
  },
  [types.BOX.UPDATE.FAILED]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
  [types.BOX.REMOVE.REQUEST]: state => ({ ...state }),
  [types.BOX.REMOVE.RECEIVE]: (state, action) => ({
    ...state,
    list: state.list.filter(box => box.id !== action.payload.id),
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
}, initialState);

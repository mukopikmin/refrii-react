import { createActions } from 'redux-actions';
import types from '../actionTypes';

export default createActions({
  [types.BOX.LIST.REQUEST]: session => ({ session }),
  [types.BOX.LIST.RECEIVE]: boxes => ({ boxes }),
  [types.BOX.LIST.FAILED]: error => ({ error }),
  [types.BOX.CREATE.REQUEST]: params => ({ params }),
  [types.BOX.CREATE.RECEIVE]: box => ({ box }),
  [types.BOX.CREATE.FAILED]: error => ({ error }),
  [types.BOX.UPDATE.REQUEST]: params => ({ params }),
  [types.BOX.UPDATE.RECEIVE]: () => ({ }),
  [types.BOX.UPDATE.FAILED]: error => ({ error }),
  [types.BOX.REMOVE.REQUEST]: params => ({ params }),
  [types.BOX.REMOVE.RECEIVE]: () => ({ }),
  [types.BOX.REMOVE.FAILED]: error => ({ error }),
  [types.BOX.INVITE.REQUEST]: (box, email) => ({ box, email }),
  [types.BOX.INVITE.RECEIVE]: () => ({ }),
  [types.BOX.INVITE.FAILED]: error => ({ error }),
  [types.BOX.SELECT]: box => ({ box }),
  [types.BOX.SET_PARAMS]: params => ({ params }),
  [types.MODAL.BOX.NEW.OPEN]: params => ({ params }),
  [types.MODAL.BOX.NEW.CLOSE]: () => ({ }),
  [types.MODAL.BOX.EDIT.OPEN]: params => ({ params }),
  [types.MODAL.BOX.EDIT.CLOSE]: () => ({ }),
});

import { createActions } from 'redux-actions';
import types from '../actionTypes';

export default createActions({
  [types.BOX.LIST.REQUEST]: session => ({ session }),
  [types.BOX.LIST.RECEIVE]: boxes => ({ boxes }),
  [types.BOX.LIST.FAILED]: error => ({ error }),
  [types.BOX.CREATE.REQUEST]: box => ({ box }),
  [types.BOX.CREATE.RECEIVE]: box => ({ box }),
  [types.BOX.CREATE.FAILED]: error => ({ error }),
  [types.BOX.UPDATE.REQUEST]: box => ({ box }),
  [types.BOX.UPDATE.RECEIVE]: () => ({ }),
  [types.BOX.UPDATE.FAILED]: error => ({ error }),
  [types.BOX.REMOVE.REQUEST]: box => ({ box }),
  [types.BOX.REMOVE.RECEIVE]: () => ({ }),
  [types.BOX.REMOVE.FAILED]: error => ({ error }),
  [types.BOX.INVITE.REQUEST]: (box, email) => ({ box, email }),
  [types.BOX.INVITE.RECEIVE]: () => ({ }),
  [types.BOX.INVITE.FAILED]: error => ({ error }),
  [types.BOX.SELECT]: box => ({ box }),
  [types.BOX.SET_PARAMS]: box => ({ box }),
  [types.MODAL.BOX.NEW.OPEN]: box => ({ box }),
  [types.MODAL.BOX.NEW.CLOSE]: () => ({ }),
  [types.MODAL.BOX.EDIT.OPEN]: box => ({ box }),
  [types.MODAL.BOX.EDIT.CLOSE]: () => ({ }),
});

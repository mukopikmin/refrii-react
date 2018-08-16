import { createActions } from 'redux-actions';
import types from '../actionTypes';

export default createActions({
  [types.UNIT.LIST.REQUEST]: session => ({ session }),
  [types.UNIT.LIST.RECEIVE]: units => ({ units }),
  [types.UNIT.LIST.FAILED]: error => ({ error }),
  [types.UNIT.CREATE.REQUEST]: params => ({ params }),
  [types.UNIT.CREATE.RECEIVE]: food => ({ food }),
  [types.UNIT.CREATE.FAILED]: error => ({ error }),
  [types.UNIT.UPDATE.REQUEST]: params => ({ params }),
  [types.UNIT.UPDATE.RECEIVE]: () => ({ }),
  [types.UNIT.UPDATE.FAILED]: error => ({ error }),
  [types.UNIT.REMOVE.REQUEST]: params => ({ params }),
  [types.UNIT.REMOVE.RECEIVE]: () => ({ }),
  [types.UNIT.REMOVE.FAILED]: error => ({ error }),
  [types.UNIT.SET_PARAMS]: params => ({ params }),
  [types.MODAL.UNIT.NEW.OPEN]: params => ({ params }),
  [types.MODAL.UNIT.NEW.CLOSE]: () => ({ }),
  [types.MODAL.UNIT.EDIT.OPEN]: params => ({ params }),
  [types.MODAL.UNIT.EDIT.CLOSE]: () => ({ }),
});

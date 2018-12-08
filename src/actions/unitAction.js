import { createActions } from 'redux-actions';
import types from '../actionTypes';

export default createActions({
  [types.UNIT.LIST.REQUEST]: session => ({ session }),
  [types.UNIT.LIST.RECEIVE]: units => ({ units }),
  [types.UNIT.LIST.FAILED]: error => ({ error }),
  [types.UNIT.CREATE.REQUEST]: unit => ({ unit }),
  [types.UNIT.CREATE.RECEIVE]: food => ({ food }),
  [types.UNIT.CREATE.FAILED]: error => ({ error }),
  [types.UNIT.UPDATE.REQUEST]: unit => ({ unit }),
  [types.UNIT.UPDATE.RECEIVE]: () => ({ }),
  [types.UNIT.UPDATE.FAILED]: error => ({ error }),
  [types.UNIT.REMOVE.REQUEST]: unit => ({ unit }),
  [types.UNIT.REMOVE.RECEIVE]: () => ({ }),
  [types.UNIT.REMOVE.FAILED]: error => ({ error }),
  [types.UNIT.SET_PARAMS]: unit => ({ unit }),
  [types.MODAL.UNIT.NEW.OPEN]: unit => ({ unit }),
  [types.MODAL.UNIT.NEW.CLOSE]: () => ({ }),
  [types.MODAL.UNIT.EDIT.OPEN]: unit => ({ unit }),
  [types.MODAL.UNIT.EDIT.CLOSE]: () => ({ }),
});

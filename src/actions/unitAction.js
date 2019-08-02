import { createActions } from 'redux-actions';
import types from '../actionTypes';

export default createActions({
  [types.UNIT.LIST.REQUEST]: session => ({ session }),
  [types.UNIT.LIST.RECEIVE]: units => ({ units }),
  [types.UNIT.LIST.FAILED]: error => ({ error }),
  [types.UNIT.CREATE.REQUEST]: unit => ({ unit }),
  [types.UNIT.CREATE.RECEIVE]: unit => ({ unit }),
  [types.UNIT.CREATE.FAILED]: error => ({ error }),
  [types.UNIT.UPDATE.REQUEST]: unit => ({ unit }),
  [types.UNIT.UPDATE.RECEIVE]: unit => ({ unit }),
  [types.UNIT.UPDATE.FAILED]: error => ({ error }),
  [types.UNIT.REMOVE.REQUEST]: unit => ({ unit }),
  [types.UNIT.REMOVE.RECEIVE]: id => ({ id }),
  [types.UNIT.REMOVE.FAILED]: error => ({ error }),
  [types.UNIT.SET_PARAMS]: unit => ({ unit }),
});

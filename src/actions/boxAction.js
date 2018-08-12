import { createActions } from 'redux-actions';
import types from '../actionTypes';

export default createActions({
  [types.BOX.LIST.REQUEST]: session => ({session  }),
  [types.BOX.LIST.RECEIVE]: boxes => ({boxes  }),
  [types.BOX.LIST.FAILED]: error => ({error  }),
  [types.BOX.SELECT]: boxId => ({boxId  }),
  [types.BOX.SET_PARAMS]: params => ({ params }),
  [types.MODAL.BOX.NEW.OPEN]: params => ({ params }),
  [types.MODAL.BOX.NEW.CLOSE]: () => ({ }),
  [types.MODAL.BOX.EDIT.OPEN]: params => ({ params }),
  [types.MODAL.BOX.EDIT.CLOSE]: () => ({ }),
});

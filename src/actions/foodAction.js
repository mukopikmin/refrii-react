import { createActions } from "redux-actions";
import types from "../actionTypes";

export default createActions({
  [types.FOOD.LIST.REQUEST]: () => ({}),
  [types.FOOD.LIST.RECEIVE]: foods => ({ foods }),
  [types.FOOD.LIST.FAILED]: error => ({ error }),
  [types.FOOD.CREATE.REQUEST]: food => ({ food }),
  [types.FOOD.CREATE.RECEIVE]: food => ({ food }),
  [types.FOOD.CREATE.FAILED]: error => ({ error }),
  [types.FOOD.UPDATE.REQUEST]: food => ({ food }),
  [types.FOOD.UPDATE.RECEIVE]: food => ({ food }),
  [types.FOOD.UPDATE.FAILED]: error => ({ error }),
  [types.FOOD.REMOVE.REQUEST]: food => ({ food }),
  [types.FOOD.REMOVE.RECEIVE]: food => ({ food }),
  [types.FOOD.REMOVE.FAILED]: error => ({ error }),
  [types.FOOD.NOTICE.CREATE.REQUEST]: params => ({ params }),
  [types.FOOD.NOTICE.CREATE.RECEIVE]: food => ({ food }),
  [types.FOOD.NOTICE.CREATE.FAILED]: error => ({ error }),
  [types.FOOD.NOTICE.REMOVE.REQUEST]: id => ({ id }),
  [types.FOOD.NOTICE.REMOVE.RECEIVE]: id => ({ id }),
  [types.FOOD.NOTICE.REMOVE.FAILED]: error => ({ error })
});

import { handleActions } from "redux-actions";
import types from "../actionTypes";

const initialState = {
  message: ""
};

export default handleActions(
  {
    [types.NOTIFICATION.SHOW]: (state, action) => ({
      ...state,
      message: action.payload.message
    }),
    [types.NOTIFICATION.HIDE]: state => ({
      ...state,
      message: initialState.message
    })
  },
  initialState
);

import { handleActions } from "redux-actions";
import types from "../actionTypes";

const initialSession = {
  jwt: null,
  user: null
};
const initialState = {
  session: initialSession,
  list: [],
  error: null
};

export default handleActions(
  {
    [types.SESSION.FIREBASE_AUTH.REQUEST]: state => ({ ...state }),
    [types.SESSION.FIREBASE_AUTH.RECEIVE]: (state, action) => ({
      ...state,
      session: {
        ...state.session,
        jwt: action.payload.session.ra
      }
    }),
    [types.SESSION.FIREBASE_AUTH.FAILED]: (state, action) => ({
      ...state,
      error: action.payload.error
    }),
    [types.SESSION.SIGNUP.REQUEST]: state => ({ ...state }),
    [types.SESSION.SIGNUP.RECEIVE]: (state, action) => ({
      ...state,
      session: {
        ...state.session,
        user: action.payload.user
      }
    }),
    [types.SESSION.SIGNUP.FAILED]: (state, action) => ({
      ...state,
      error: action.payload.error
    }),
    [types.SESSION.VERIFY.REQUEST]: state => ({ ...state }),
    [types.SESSION.VERIFY.RECEIVE]: (state, action) => ({
      ...state,
      session: {
        ...state.session,
        user: action.payload.user
      }
    }),
    [types.SESSION.VERIFY.FAILED]: (state, action) => ({
      ...state,
      error: action.payload.error
    }),
    [types.SIGNOUT]: () => ({
      ...initialState
    }),
    [types.USER.LIST.REQUEST]: state => ({ ...state }),
    [types.USER.LIST.RECEIVE]: (state, action) => ({
      ...state,
      list: action.payload.users
    }),
    [types.USER.LIST.FAILED]: (state, action) => ({
      ...state,
      error: action.payload.error
    }),
    [types.USER.UPDATE.REQUEST]: state => ({ ...state }),
    [types.USER.UPDATE.RECEIVE]: (state, action) => ({
      ...state,
      session: {
        ...state.session,
        user: action.payload.user
      }
    }),
    [types.USER.UPDATE.FAILED]: (state, action) => ({
      ...state,
      error: action.payload.error
    })
  },
  initialState
);

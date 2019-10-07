import { handleActions } from "redux-actions";
import types from "../actionTypes";

const initialState = {
  list: []
};

export default handleActions(
  {
    [types.FOOD.LIST.REQUEST]: state => ({ ...state }),
    [types.FOOD.LIST.RECEIVE]: (state, action) => ({
      ...state,
      list: action.payload.foods
    }),
    [types.FOOD.LIST.FAILED]: (state, action) => ({
      ...state,
      error: action.payload.error
    }),
    [types.FOOD.CREATE.REQUEST]: state => ({ ...state }),
    [types.FOOD.CREATE.RECEIVE]: (state, action) => ({
      ...state,
      list: state.list.concat([action.payload.food])
    }),
    [types.FOOD.CREATE.FAILED]: (state, action) => ({
      ...state,
      error: action.payload.error
    }),
    [types.FOOD.UPDATE.REQUEST]: state => ({ ...state }),
    [types.FOOD.UPDATE.RECEIVE]: (state, action) => {
      const list = state.list.concat([]);
      const { food } = action.payload;
      const index = list.map(f => f.id).indexOf(food.id);

      list[index] = food;

      return {
        ...state,
        list
      };
    },
    [types.FOOD.UPDATE.FAILED]: (state, action) => ({
      ...state,
      error: action.payload.error
    }),
    [types.FOOD.REMOVE.REQUEST]: state => ({ ...state }),
    [types.FOOD.REMOVE.RECEIVE]: (state, action) => ({
      ...state,
      list: state.list.filter(food => food.id !== action.payload.food.id)
    }),
    [types.FOOD.REMOVE.FAILED]: (state, action) => ({
      ...state,
      error: action.payload.error
    }),
    [types.FOOD.NOTICE.CREATE.REQUEST]: state => ({ ...state }),
    [types.FOOD.NOTICE.CREATE.RECEIVE]: (state, action) => {
      const list = state.list.concat([]);
      const { food } = action.payload;
      const index = list.map(f => f.id).indexOf(food.id);

      list[index].notices = food.notices;

      return {
        ...state,
        list
      };
    },
    [types.FOOD.NOTICE.CREATE.FAILED]: (state, action) => ({
      ...state,
      error: action.payload.error
    }),
    [types.FOOD.NOTICE.REMOVE.REQUEST]: state => ({ ...state }),
    [types.FOOD.NOTICE.REMOVE.RECEIVE]: (state, action) => {
      const { params } = action.payload;
      const list = state.list.concat([]);
      const index = list.map(f => f.id).indexOf(params.foodId);

      list[index].notices = list[index].notices.filter(notice => {
        return notice.id === params.id;
      });

      return {
        ...state,
        list
      };
    },
    [types.FOOD.NOTICE.REMOVE.FAILED]: (state, action) => ({
      ...state,
      error: action.payload.error
    })
  },
  initialState
);

import { call, put, takeLatest, select, fork } from "redux-saga/effects";

import types from "../actionTypes";
import actions from "../actions";
import selectors from "../selectors";
import Food from "../models/food";
import Notice from "../models/notice";
import handleError from "./handleErrors";

function* handleRequestListFood() {
  try {
    const session = yield select(selectors.getSession);
    const foods = yield call(Food.getFoods, session.jwt);
    yield put(actions.receiveListFood(foods));
  } catch (error) {
    yield put(actions.failedListFood(error));
    yield fork(handleError, error);
  }
}

function* handleRequestCreateFood(action) {
  try {
    const session = yield select(selectors.getSession);
    const { food } = action.payload;
    const createdFood = yield call(Food.createFood, session.jwt, food);
    yield put(actions.receiveCreateFood(createdFood));
    // const boxes = yield call(Box.getBoxes, session.jwt);
    // yield put(actions.receiveListBox(boxes));
    yield put(actions.showNotification(`${food.name} が作成されました`));
  } catch (error) {
    yield put(actions.failedCreateFood(error));
    yield fork(handleError, error);
  }
}

function* handleRequestUpdateFood(action) {
  try {
    const { food } = action.payload;
    const session = yield select(selectors.getSession);
    const updatedFood = yield call(Food.updateFood, session.jwt, food);
    yield put(actions.receiveUpdateFood(updatedFood));
    // const boxes = yield call(Box.getBoxes, session.jwt);
    // yield put(actions.receiveListBox(boxes));
    yield put(actions.showNotification(`${food.name} が更新されました`));
  } catch (error) {
    yield put(actions.failedUpdateFood(error));
    yield fork(handleError, error);
  }
}

function* handleRequestRemoveFood(action) {
  try {
    const { food } = action.payload;
    const session = yield select(selectors.getSession);
    yield call(Food.removeFood, session.jwt, food.id);
    yield put(actions.receiveRemoveFood(food));
    // const boxes = yield call(Box.getBoxes, session.jwt);
    // yield put(actions.receiveListBox(boxes));
    yield put(actions.showNotification(`${food.name} を削除しました`));
  } catch (error) {
    yield put(actions.failedRemoveFood(error));
    yield fork(handleError, error);
  }
}

function* handleRequestCreateNoticeFood(action) {
  try {
    const { params } = action.payload;
    const session = yield select(selectors.getSession);
    const food = yield call(Notice.create, session.jwt, params);

    yield put(actions.receiveCreateNoticeFood(food));
    yield put(actions.showNotification(`${food.name} にメモを追加しました`));
  } catch (error) {
    yield put(actions.failedCreateNoticeFood(error));
    yield fork(handleError, error);
  }
}

export default [
  takeLatest(types.FOOD.LIST.REQUEST, handleRequestListFood),
  takeLatest(types.FOOD.CREATE.REQUEST, handleRequestCreateFood),
  takeLatest(types.FOOD.UPDATE.REQUEST, handleRequestUpdateFood),
  takeLatest(types.FOOD.REMOVE.REQUEST, handleRequestRemoveFood),
  takeLatest(types.FOOD.NOTICE.CREATE.REQUEST, handleRequestCreateNoticeFood)
];

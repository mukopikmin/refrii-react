import { call, put, takeLatest, select } from 'redux-saga/effects';
import types from '../actionTypes';
import Api from '../api';
import actions from '../actions';
import selectors from '../selectors';

function* handleRequestCreateFood(action) {
  try {
    const session = yield select(selectors.getSession);
    const params = {
      ...action.payload.params,
      userId: session.user.id
    }
    yield call(Api.createFood, session.jwt, params);
    yield put(actions.receiveCreateFood())
    const boxes = yield call(Api.getBoxes, session.jwt);
    yield put(actions.receiveListBox(boxes));
  } catch (error) {
    yield put(actions.failedCreateFood(error));
  }
}

function* handleRequestUpdateFood(action) {
  try {
    const food = action.payload.food;
    const session = yield select(selectors.getSession);
    yield call(Api.updateFood, session.jwt, food);
    const boxes = yield call(Api.getBoxes, session.jwt);
    yield put(actions.receiveListBox(boxes));
  } catch (error) {
    yield put(actions.failedUpdateFood(error));
  }
}

export default [
  takeLatest(types.FOOD.CREATE.REQUEST, handleRequestCreateFood),
  takeLatest(types.FOOD.UPDATE.REQUEST, handleRequestUpdateFood),
];

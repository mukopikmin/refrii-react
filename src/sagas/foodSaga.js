import { call, put, takeLatest, select } from 'redux-saga/effects';
import types from '../actionTypes';
import Api from '../api';
import actions from '../actions';
import selectors from '../selectors';

function* handleRequestCreateFood(action) {
  try {
    const session = yield select(selectors.getSession);
    const params = action.payload.params
    yield call(Api.createFood, session.jwt, params);
    yield put(actions.receiveCreateFood());
    const boxes = yield call(Api.getBoxes, session.jwt);
    yield put(actions.receiveListBox(boxes));
  } catch (error) {
    console.log(error)
    yield put(actions.failedCreateFood(error));
  }
}

function* handleRequestUpdateFood(action) {
  try {
    const params = action.payload.params;
    const session = yield select(selectors.getSession);
    yield call(Api.updateFood, session.jwt, params);
    yield put(actions.receiveUpdateFood());
    const boxes = yield call(Api.getBoxes, session.jwt);
    yield put(actions.receiveListBox(boxes));
  } catch (error) {
    console.log(error)
    yield put(actions.failedUpdateFood(error));
  }
}

function* handleRequestRemoveFood(action) {
  try {
    const params = action.payload.params;
    const session = yield select(selectors.getSession);
    yield call(Api.removeFood, session.jwt, params.id);
    const boxes = yield call(Api.getBoxes, session.jwt);
    yield put(actions.receiveListBox(boxes));
  } catch (error) {
    console.log(error)
    yield put(actions.failedRemoveFood(error));
  }
}

export default [
  takeLatest(types.FOOD.CREATE.REQUEST, handleRequestCreateFood),
  takeLatest(types.FOOD.UPDATE.REQUEST, handleRequestUpdateFood),
  takeLatest(types.FOOD.REMOVE.REQUEST, handleRequestRemoveFood),
];

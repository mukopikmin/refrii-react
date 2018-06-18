import { call, put, takeLatest, select } from 'redux-saga/effects';
import types from '../actionTypes';
import Api from '../api';
import actions from '../actions';
import selectors from '../selectors';

function* handleRequestUpdateFood(action) {
  try {
    const food = action.payload.food;
    const session = yield select(selectors.getSession);
    yield call(Api.updateFood, session.jwt, food);
    const boxes = yield call(Api.getBoxes, session.jwt);
    yield put(actions.receiveGetBoxes(boxes));
  } catch (error) {
    yield put(actions.failedUpdateFood(error));
  }
}

export default [takeLatest(types.REQUEST_UPDATE_FOOD, handleRequestUpdateFood)];

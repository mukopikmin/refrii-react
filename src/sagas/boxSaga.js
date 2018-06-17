import { call, put, takeLatest, select } from 'redux-saga/effects';
import types from '../actionTypes';
import Api from '../api';
import actions from '../actions';
import selectors from '../selectors'

function* handleRequestGetBoxes() {
  try {
    const session = yield select(selectors.getSession)
    const boxes = yield call(Api.getBoxes, session.jwt);
    yield put(actions.receiveGetBoxes(boxes));

    if (boxes.length > 0) {
      const box = yield select(selectors.getBox)
      if (!box) {
        yield put(actions.selectBox(boxes[0]))
      }
    }
  } catch (error) {
    yield put(actions.failedGetBoxes(error));
  }
}

export default [takeLatest(types.REQUEST_GET_BOXES, handleRequestGetBoxes)];

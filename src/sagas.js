import { call, put, takeLatest, select } from 'redux-saga/effects';

import types from './actionTypes';
import Api from './api';
import actions from './actions';
import selectors from './selectors'

function* handleRequesGoogleAuth(action) {
  const { googleToken } = action.payload;
  const credential = yield call(Api.authWithGoogle, googleToken);
  yield put(actions.receiveGoogleAuth(credential));
}

function* handleRequestGetBoxes(action) {
  try {
    const { jwt } = action.payload.credential;
    const boxes = yield call(Api.getBoxes, jwt);
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

export default function* rootSaga() {
  yield takeLatest(types.REQUEST_GOOGLE_AUTH, handleRequesGoogleAuth);
  yield takeLatest(types.REQUEST_GET_BOXES, handleRequestGetBoxes);
}

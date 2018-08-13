import { call, put, takeLatest, select } from 'redux-saga/effects';
import types from '../actionTypes';
import Api from '../api';
import actions from '../actions';
import selectors from '../selectors';

function* handleRequestListBox() {
  try {
    const session = yield select(selectors.getSession);
    const boxes = yield call(Api.getBoxes, session.jwt);
    yield put(actions.receiveListBox(boxes));

    if (boxes.length > 0) {
      const box = yield select(selectors.getSelectedBox);
      if (!box) {
        yield put(actions.selectBox(boxes[0].id));
      }
    }
  } catch (error) {
    yield put(actions.failedListBox(error));
  }
}

function* handleRequestCreateBox(action) {
  try {
    const session = yield select(selectors.getSession);
    const params = action.payload.params;
    yield call(Api.createBox, session.jwt, params);
    yield put(actions.receiveCreateBox());
    const boxes = yield call(Api.getBoxes, session.jwt);
    yield put(actions.receiveListBox(boxes));
  } catch (error) {
    console.log(error);
    yield put(actions.failedCreateBox(error));
  }
}

function* handleRequestUpdateBox(action) {
  try {
    const params = action.payload.params;
    const session = yield select(selectors.getSession);
    yield call(Api.updateBox, session.jwt, params);
    yield put(actions.receiveUpdateBox());
    const boxes = yield call(Api.getBoxes, session.jwt);
    yield put(actions.receiveListBox(boxes));
  } catch (error) {
    console.log(error);
    yield put(actions.failedUpdateBox(error));
  }
}

function* handleRequestRemoveBox(action) {
  try {
    const params = action.payload.params;
    const session = yield select(selectors.getSession);
    yield call(Api.removeBox, session.jwt, params.id);
    yield put(actions.receiveRemoveBox())
    const boxes = yield call(Api.getBoxes, session.jwt);
    yield put(actions.receiveListBox(boxes));
  } catch (error) {
    console.log(error);
    yield put(actions.failedRemoveBox(error));
  }
}

export default [
  takeLatest(types.BOX.LIST.REQUEST, handleRequestListBox),
  takeLatest(types.BOX.CREATE.REQUEST, handleRequestCreateBox),
  takeLatest(types.BOX.UPDATE.REQUEST, handleRequestUpdateBox),
  takeLatest(types.BOX.REMOVE.REQUEST, handleRequestRemoveBox),
];

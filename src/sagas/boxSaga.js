import { call, put, takeLatest, select, fork } from "redux-saga/effects";

import types from "../actionTypes";
import actions from "../actions";
import selectors from "../selectors";
import Box from "../models/box";
import handleError from "./handleErrors";

function* handleRequestListBox() {
  try {
    const session = yield select(selectors.getSession);
    const boxes = yield call(Box.getBoxes, session.jwt);

    yield put(actions.receiveListBox(boxes));

    if (boxes.length > 0) {
      const box = yield select(selectors.getSelectedBox);

      if (!box) {
        yield put(actions.selectBox(boxes[0]));
      }
    }
  } catch (error) {
    yield put(actions.failedListBox(error));
    yield fork(handleError, error);
  }
}

function* handleRequestCreateBox(action) {
  try {
    const session = yield select(selectors.getSession);
    const { box } = action.payload;

    yield call(Box.createBox, session.jwt, box);
    yield put(actions.receiveCreateBox());
    yield put(actions.showNotification(`${box.name} が作成されました`));
  } catch (error) {
    yield put(actions.failedCreateBox(error));
    yield fork(handleError, error);
  }
}

function* handleRequestUpdateBox(action) {
  try {
    const { box } = action.payload;
    const session = yield select(selectors.getSession);
    const updated = yield call(Box.updateBox, session.jwt, box);

    yield put(actions.receiveUpdateBox(updated));
    yield put(actions.showNotification(`${box.name} が更新されました`));
  } catch (error) {
    yield put(actions.failedUpdateBox(error));
    yield fork(handleError, error);
  }
}

function* handleRequestRemoveBox(action) {
  try {
    const { box } = action.payload;
    const session = yield select(selectors.getSession);

    yield call(Box.removeBox, session.jwt, box.id);
    yield put(actions.receiveRemoveBox(box.id));
    yield put(actions.showNotification(`${box.name} が削除されました`));
  } catch (error) {
    yield put(actions.failedRemoveBox(error));
    yield fork(handleError, error);
  }
}

function* handleRequestInviteBox(action) {
  try {
    const { box, email } = action.payload;
    const session = yield select(selectors.getSession);

    yield call(Box.invite, session.jwt, box.id, email);
    yield put(actions.receiveInviteBox());
    yield put(actions.showNotification(`${box.name} が共有されました`));
  } catch (error) {
    yield put(actions.failedInviteBox(error));
    yield fork(handleError, error);
  }
}

export default [
  takeLatest(types.BOX.LIST.REQUEST, handleRequestListBox),
  takeLatest(types.BOX.CREATE.REQUEST, handleRequestCreateBox),
  takeLatest(types.BOX.UPDATE.REQUEST, handleRequestUpdateBox),
  takeLatest(types.BOX.REMOVE.REQUEST, handleRequestRemoveBox),
  takeLatest(types.BOX.INVITE.REQUEST, handleRequestInviteBox)
];

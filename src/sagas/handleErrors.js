import { put } from "redux-saga/effects";

import actions from "../actions";

export default function* handleError(error) {
  // switch(error.message) {
  //   case 401:
  //     yield put(actions.signout())
  //     break;
  //   default:
  //     yield put(actions.signout())
  //     break;
  // }

  if (error.message.includes("auth")) {
    yield put(actions.signout());
  } else {
    yield put(actions.showNotification(error.message));
  }
}

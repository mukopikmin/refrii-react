import { call, put, takeLatest, select } from 'redux-saga/effects';
import types from '../actionTypes';
import Api from '../api';
import actions from '../actions';
import selectors from '../selectors';

function* handleRequesGoogleAuth() {
  const { googleToken } = yield select(selectors.getSession);
  const session = yield call(Api.authWithGoogle, googleToken);
  yield put(actions.receiveGoogleAuth(session));
}

export default [takeLatest(types.REQUEST_GOOGLE_AUTH, handleRequesGoogleAuth)];

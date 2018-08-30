import { call, put, takeLatest, select } from 'redux-saga/effects';
import types from '../actionTypes';
import actions from '../actions';
import selectors from '../selectors';
import User from '../models/user';

function* handleRequesGoogleAuth() {
  const { googleToken } = yield select(selectors.getSession);
  const session = yield call(User.authWithGoogle, googleToken);
  yield put(actions.receiveGoogleAuth(session));
}

export default [
  takeLatest(types.GOOGLE_AUTH.REQUEST, handleRequesGoogleAuth),
];

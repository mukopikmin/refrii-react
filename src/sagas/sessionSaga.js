import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import types from '../actionTypes';
import actions from '../actions';
import selectors from '../selectors';
import handleError from './handleErrors';
import User from '../models/user';

function* handleRequestVerifySession() {
  try {
    const session = yield select(selectors.getSession);
    const user = yield call(User.verify, session.jwt);

    yield put(actions.receiveVerifySession(user));
  } catch (error) {
    yield put(actions.failedVerifySession(error));
    yield fork(handleError, error);
  }
}

export default [
  takeLatest(types.SESSION.VERIFY.REQUEST, handleRequestVerifySession),
];

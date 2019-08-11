import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';

import types from '../actionTypes';
import actions from '../actions';
import selectors from '../selectors';
import User from '../models/user';
import handleError from './handleErrors';

function* handleRequestSignup() {
  try {
    const session = yield select(selectors.getSession);
    const user = yield call(User.signup, session.jwt);

    yield put(actions.receiveSignupSession(user));
  } catch (error) {
    yield put(actions.failedSignupSession(error));
    yield fork(handleError, error);
  }
}

function* handleRequestVerify() {
  try {
    const session = yield select(selectors.getSession);
    const user = yield call(User.verify, session.jwt);

    yield put(actions.receiveVerifySession(user));
  } catch (error) {
    yield put(actions.failedVerifySession(error));
    yield fork(handleError, error);
  }
}

function* handleRequestListUser() {
  try {
    const session = yield select(selectors.getSession);
    const users = yield call(User.getUsers, session.jwt);

    yield put(actions.receiveListUser(users));
  } catch (error) {
    yield put(actions.failedListUser(error));
    yield fork(handleError, error);
  }
}

function* handleRequestUpdateUser(action) {
  try {
    const session = yield select(selectors.getSession);
    const { id, name, avatar } = action.payload;
    const user = yield call(User.update, session.jwt, id, name, avatar);

    yield put(actions.receiveUpdateUser(user));
  } catch (error) {
    yield put(actions.failedUpdateUser(error));
    yield fork(handleError, error);
  }
}

export default [
  takeLatest(types.SESSION.SIGNUP.REQUEST, handleRequestSignup),
  takeLatest(types.SESSION.VERIFY.REQUEST, handleRequestVerify),
  takeLatest(types.USER.LIST.REQUEST, handleRequestListUser),
  takeLatest(types.USER.UPDATE.REQUEST, handleRequestUpdateUser),
];

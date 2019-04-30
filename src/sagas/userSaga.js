import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';

import types from '../actionTypes';
import actions from '../actions';
import selectors from '../selectors';
import User from '../models/user';
import handleError from './handleErrors';

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

export default [
  takeLatest(types.USER.LIST.REQUEST, handleRequestListUser),
];

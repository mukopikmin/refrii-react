import { call, put, takeLatest, select, fork } from 'redux-saga/effects';

import types from '../actionTypes';
import actions from '../actions';
import selectors from '../selectors';
import Unit from '../models/unit';
import handleError from './handleErrors';

function* handleRequestListUnit() {
  try {
    const session = yield select(selectors.getSession);
    const units = yield call(Unit.getUnits, session.jwt);
    yield put(actions.receiveListUnit(units));
  } catch (error) {
    yield put(actions.failedListUnit(error));
    yield fork(handleError, error);
  }
}

function* handleRequestCreateUnit(action) {
  try {
    const session = yield select(selectors.getSession);
    const { params } = action.payload;
    yield call(Unit.createUnit, session.jwt, params);
    yield put(actions.receiveCreateUnit());
    const units = yield call(Unit.getUnits, session.jwt);
    yield put(actions.receiveListUnit(units));
  } catch (error) {
    yield put(actions.failedCreateUnit(error));
    yield fork(handleError, error);
  }
}

function* handleRequestUpdateUnit(action) {
  try {
    const { params } = action.payload;
    const session = yield select(selectors.getSession);
    yield call(Unit.updateUnit, session.jwt, params);
    yield put(actions.receiveUpdateUnit());
    const units = yield call(Unit.getUnits, session.jwt);
    yield put(actions.receiveListUnit(units));
  } catch (error) {
    yield put(actions.failedUpdateUnit(error));
    yield fork(handleError, error);
  }
}

function* handleRequestRemoveUnit(action) {
  try {
    const { params } = action.payload;
    const session = yield select(selectors.getSession);
    yield call(Unit.removeUnit, session.jwt, params.id);
    yield put(actions.receiveRemoveUnit());
    const units = yield call(Unit.getUnits, session.jwt);
    yield put(actions.receiveListUnit(units));
  } catch (error) {
    yield put(actions.failedRemoveUnit(error));
    yield fork(handleError, error);
  }
}

export default [
  takeLatest(types.UNIT.LIST.REQUEST, handleRequestListUnit),
  takeLatest(types.UNIT.CREATE.REQUEST, handleRequestCreateUnit),
  takeLatest(types.UNIT.UPDATE.REQUEST, handleRequestUpdateUnit),
  takeLatest(types.UNIT.REMOVE.REQUEST, handleRequestRemoveUnit),
];

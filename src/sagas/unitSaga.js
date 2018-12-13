import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';

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
    const { unit } = action.payload;
    const createdUnit = yield call(Unit.createUnit, session.jwt, unit);
    yield put(actions.receiveCreateUnit(createdUnit));
    // const units = yield call(Unit.getUnits, session.jwt);
    // yield put(actions.receiveListUnit(units));
    yield put(actions.showNotification(`${unit.label} が作成されました`));
  } catch (error) {
    yield put(actions.failedCreateUnit(error));
    yield fork(handleError, error);
  }
}

function* handleRequestUpdateUnit(action) {
  try {
    const { unit } = action.payload;
    const session = yield select(selectors.getSession);
    const updatedUnit = yield call(Unit.updateUnit, session.jwt, unit, unit.id);
    yield put(actions.receiveUpdateUnit(updatedUnit));
    // const units = yield call(Unit.getUnits, session.jwt);
    // yield put(actions.receiveListUnit(units));
    yield put(actions.showNotification(`${unit.label} が更新されました`));
  } catch (error) {
    yield put(actions.failedUpdateUnit(error));
    yield fork(handleError, error);
  }
}

function* handleRequestRemoveUnit(action) {
  try {
    const { unit } = action.payload;
    const session = yield select(selectors.getSession);
    yield call(Unit.removeUnit, session.jwt, unit.id);
    yield put(actions.receiveRemoveUnit(unit.id));
    // const units = yield call(Unit.getUnits, session.jwt);
    // yield put(actions.receiveListUnit(units));
    yield put(actions.showNotification(`${unit.label} が削除されました`));
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

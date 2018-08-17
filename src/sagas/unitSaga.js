import { call, put, takeLatest, select } from 'redux-saga/effects';
import types from '../actionTypes';
import Api from '../api';
import actions from '../actions';
import selectors from '../selectors';

function* handleRequestListUnit() {
  try {
    const session = yield select(selectors.getSession);
    const units = yield call(Api.getUnits, session.jwt);
    yield put(actions.receiveListUnit(units));
  } catch (error) {
    yield put(actions.failedListUnit(error));
  }
}

function* handleRequestCreateUnit(action) {
  try {
    const session = yield select(selectors.getSession);
    const params = action.payload.params;
    yield call(Api.createUnit, session.jwt, params);
    yield put(actions.receiveCreateUnit());
    const units = yield call(Api.getUnits, session.jwt);
    yield put(actions.receiveListUnit(units));
  } catch (error) {
    console.log(error);
    yield put(actions.failedCreateUnit(error));
  }
}

function* handleRequestUpdateUnit(action) {
  try {
    const params = action.payload.params;
    const session = yield select(selectors.getSession);
    yield call(Api.updateUnit, session.jwt, params);
    yield put(actions.receiveUpdateUnit());
    const units = yield call(Api.getUnits, session.jwt);
    yield put(actions.receiveListUnit(units));
  } catch (error) {
    console.log(error);
    yield put(actions.failedUpdateUnit(error));
  }
}

function* handleRequestRemoveUnit(action) {
  try {
    const params = action.payload.params;
    const session = yield select(selectors.getSession);
    yield call(Api.removeUnit, session.jwt, params.id);
    yield put(actions.receiveRemoveUnit());
    const units = yield call(Api.getUnits, session.jwt);
    yield put(actions.receiveListUnit(units));
  } catch (error) {
    console.log(error);
    yield put(actions.failedRemoveUnit(error));
  }
}

export default [
  takeLatest(types.UNIT.LIST.REQUEST, handleRequestListUnit),
  takeLatest(types.UNIT.CREATE.REQUEST, handleRequestCreateUnit),
  takeLatest(types.UNIT.UPDATE.REQUEST, handleRequestUpdateUnit),
  takeLatest(types.UNIT.REMOVE.REQUEST, handleRequestRemoveUnit),
];

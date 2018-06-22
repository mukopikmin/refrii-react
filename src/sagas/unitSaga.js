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

export default [
  takeLatest(types.UNIT.LIST.REQUEST, handleRequestListUnit),
];

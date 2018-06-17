import { call, put, takeLatest, select,all } from 'redux-saga/effects';
import boxSaga from './boxSaga'
import sessionSaga from './sessionSaga'

export default function* rootSaga() {
  yield all([
    boxSaga,
    sessionSaga
  ])
}

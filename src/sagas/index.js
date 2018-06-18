import { all } from 'redux-saga/effects';
import sessionSaga from './sessionSaga';
import boxSaga from './boxSaga';
import foodSaga from './foodSaga';

export default function* rootSaga() {
  yield all([sessionSaga,
    boxSaga,
    foodSaga]);
}

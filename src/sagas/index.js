import { all } from 'redux-saga/effects';
import boxSaga from './boxSaga';
import foodSaga from './foodSaga';
import sessionSaga from './sessionSaga';

export default function* rootSaga() {
  yield all(
    boxSaga,
    foodSaga,
    sessionSaga,
  );
}

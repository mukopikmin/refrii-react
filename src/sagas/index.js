import { all } from 'redux-saga/effects';
import sessionSaga from './sessionSaga';
import boxSaga from './boxSaga';
import foodSaga from './foodSaga';
import userSaga from './userSaga';
import unitSaga from './unitSaga';

export default function* rootSaga() {
  yield all(sessionSaga);
  yield all(boxSaga);
  yield all(foodSaga);
  yield all(unitSaga);
  yield all(userSaga);
}

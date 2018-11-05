import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';

import types from '../actionTypes';
import actions from '../actions';
import selectors from '../selectors';
import Food from '../models/food';
import Box from '../models/box';
import handleError from './handleErrors';

function* handleRequestListFood(action) {
  try {
    const session = yield select(selectors.getSession);
    const foods = yield call(Food.getFoods, session.jwt);
    yield put(actions.receiveListFood(foods));
  } catch (error) {
    yield put(actions.failedCreateFood(error));
    yield fork(handleError, error);
  }
}

function* handleRequestCreateFood(action) {
  try {
    const session = yield select(selectors.getSession);
    const { food } = action.payload;
    yield call(Food.createFood, session.jwt, food);
    yield put(actions.receiveCreateFood());
    const boxes = yield call(Box.getBoxes, session.jwt);
    yield put(actions.receiveListBox(boxes));
  } catch (error) {
    yield put(actions.failedCreateFood(error));
    yield fork(handleError, error);
  }
}

function* handleRequestUpdateFood(action) {
  try {
    const { food } = action.payload;
    const session = yield select(selectors.getSession);
    const updatedFood = yield call(Food.updateFood, session.jwt, food);
    yield put(actions.receiveUpdateFood(updatedFood));
    const boxes = yield call(Box.getBoxes, session.jwt);
    yield put(actions.receiveListBox(boxes));
  } catch (error) {
    yield put(actions.failedUpdateFood(error));
    yield fork(handleError, error);
  }
}

function* handleRequestRemoveFood(action) {
  try {
    const { food } = action.payload;
    const session = yield select(selectors.getSession);
    yield call(Food.removeFood, session.jwt, food.id);
    const boxes = yield call(Box.getBoxes, session.jwt);
    yield put(actions.receiveListBox(boxes));
  } catch (error) {
    yield put(actions.failedRemoveFood(error));
    yield fork(handleError, error);
  }
}

export default [
  takeLatest(types.FOOD.LIST.REQUEST, handleRequestListFood),
  takeLatest(types.FOOD.CREATE.REQUEST, handleRequestCreateFood),
  takeLatest(types.FOOD.UPDATE.REQUEST, handleRequestUpdateFood),
  takeLatest(types.FOOD.REMOVE.REQUEST, handleRequestRemoveFood),
];

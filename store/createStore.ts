import { Store, combineReducers } from 'redux'
import logger from 'redux-logger'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import counterSlice, { initialState as counterState } from './slice'
import boxSlice, { initialState as boxState } from './slices/boxSlice'
import userSlice, { initialState as userState } from './slices/userSlice'

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  box: boxSlice.reducer,
  user: userSlice.reducer,
})

const preloadedState = () => {
  return {
    counter: counterState,
    box: boxState,
    user: userState,
  }
}

export type StoreState = ReturnType<typeof preloadedState>

export type ReduxStore = Store<StoreState>

const createStore = () => {
  const middlewareList = [...getDefaultMiddleware(), logger]

  return configureStore({
    reducer: rootReducer,
    middleware: middlewareList,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: preloadedState(),
  })
}

export default createStore

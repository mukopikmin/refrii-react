import { Store, combineReducers } from 'redux'
import logger from 'redux-logger'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import boxSlice, { initialState as boxState } from './slices/boxSlice'
import userSlice, { initialState as userState } from './slices/userSlice'
import foodSlice, { initialState as foodState } from './slices/foodSlice'

const rootReducer = combineReducers({
  box: boxSlice.reducer,
  user: userSlice.reducer,
  food: foodSlice.reducer,
})

const preloadedState = () => {
  return {
    box: boxState,
    user: userState,
    food: foodState,
  }
}

export type StoreState = ReturnType<typeof preloadedState>

export type ReduxStore = Store<StoreState>

export const createStore = () => {
  const middlewareList = [...getDefaultMiddleware(), logger]

  return configureStore({
    reducer: rootReducer,
    middleware: middlewareList,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: preloadedState(),
  })
}

// export default createStore

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import rootSaga from './sagas';
import AppContainer from './containers/AppContainer';
import { PersistGate } from 'redux-persist/integration/react';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import registerServiceWorker from './registerServiceWorker';

const persistConfig = {
  key: 'credential',
  storage,
  whitelist: ['credential'],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];
const store = createStore(persistedReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppContainer />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

// registerServiceWorker();

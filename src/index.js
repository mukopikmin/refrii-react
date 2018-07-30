import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import moment from 'moment';
import App from './components/App';
import reducers from './reducers';
import rootSaga from './sagas';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';
import 'moment/locale/ja';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-121958327-1');
ReactGA.pageview(window.location.pathname + window.location.search);

moment.locale('ja-JP');

const persistConfig = {
  key: 'session',
  storage,
  whitelist: ['session'],
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
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

// registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import rootSaga from './sagas';
import AppContainer from './containers/AppContainer';
// import registerServiceWorker from './registerServiceWorker';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './configureStore';

// const sagaMiddleware = createSagaMiddleware();
// const middlewares = [sagaMiddleware];
// const store = createStore(reducer, applyMiddleware(...middlewares));
// sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);
// registerServiceWorker();

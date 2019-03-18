import { createStore, applyMiddleware, Action, Store } from 'redux';
import { Store as IStore, reducer } from './reducers';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas/index';

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

if (process.env.DEV === 'true') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}


const store = createStore<IStore, Action, {}, {}>(reducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export {
  store,
}


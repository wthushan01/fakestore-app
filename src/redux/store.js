import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import reducers from './reducers';
import sagas from '../saga'

const sagaMiddlewareInstace = createSagaMiddleware();

export default createStore(reducers, applyMiddleware(sagaMiddlewareInstace));

sagaMiddlewareInstace.run(sagas);
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducr';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/saga';
import {watchFetchUsers} from '../saga/saga';
// import thunk from 'redux-thunk';

const sagaMiddleWare = createSagaMiddleware()

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleWare)
));

sagaMiddleWare.run(rootSaga)
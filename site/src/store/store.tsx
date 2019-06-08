import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducer';
import axios from 'axios';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
// @ts-ignore
import { multiClientMiddleware } from 'redux-axios-middleware';
import sagas from './sagas';
import {ImageData} from '../types';

export interface RootState {
  images?: ImageData
}

const axiosClients = {
  default: {
    client: axios.create({
      baseURL: "/",
      responseType: 'json',
      timeout: 20000,
    }),
  },
};

const history = createBrowserHistory({ basename: '/gallery' });

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  multiClientMiddleware(axiosClients),
  sagaMiddleware,
  routerMiddleware(history),
];

const store = createStore(rootReducer, applyMiddleware(...middleware));
sagaMiddleware.run(sagas);
export default store;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store/store';
import { actionTypes } from './store/actions';

(async() => {
  const type: string = actionTypes.INITIAL_PAGE_LOAD;
  store.dispatch({ type } as any);
  ReactDOM.render(<App />, document.getElementById('root'));
})();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

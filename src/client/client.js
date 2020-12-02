// --------> startup point for client side

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { loadableReady } from '@loadable/component';

import App from './App';
import './client.css';
import createStore from './redux/store';

const store = createStore(window.APP_STATE);

// loadableReady(() => {
ReactDOM.hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.querySelector('#root')
);
// });

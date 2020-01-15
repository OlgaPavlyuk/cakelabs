import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './redux/store';

import './index.scss';
import 'normalize.css';

import App from './modules/App/App';

const preloadedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {};

const initState = {
  events: {
    list: [],
    loading: true,
    error: null,
    order: preloadedState.order || 'asc',
    favourites: preloadedState.favourites || [],
  }
};

const store = configureStore(initState);

store.subscribe(() => {
  const { events } = store.getState();
  const { order, favourites } = events;
  const state = {
    order,
    favourites
  };
  localStorage.setItem('state', JSON.stringify(state));
})

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

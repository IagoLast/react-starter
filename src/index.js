import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import Routes from './views/routes.js';
import Reducer from './views/reducer.js';




// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    routing: routerReducer,
    default: Reducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ Routes.Index } />
      <Route path="/counter" component={ Routes.Counter } />
    </Router>
  </Provider>,
  document.getElementById('root'));

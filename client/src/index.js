import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import "./index.css";
import thunk from 'redux-thunk';

import reducers from "./reducers";

const Store = createStore(reducers, compose(applyMiddleware(thunk)))
ReactDOM.render(
  <Provider store={Store}>

    <App />
  </Provider>,
  document.getElementById('root')
);


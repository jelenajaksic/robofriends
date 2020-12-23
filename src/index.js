import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from 'redux-thunk'
import { createLogger } from "redux-logger/src";
import './index.scss';
import 'tachyons';
import reportWebVitals from './reportWebVitals';
import App from './containers/App';
import { searchRobots, requestRobots } from "./reducers";

const logger = createLogger()
const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

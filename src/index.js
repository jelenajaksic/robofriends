import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'tachyons';
import reportWebVitals from './reportWebVitals';
import Card from './Card'
import { robots } from './robots'

ReactDOM.render(
  <React.StrictMode>
    <Card robot={robots[0]}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

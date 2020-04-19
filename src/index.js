import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './index.scss';
import "./style/reset.scss";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
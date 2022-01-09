import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.scss';
// Import this after so the Antd styles take precedence
import 'antd/dist/antd.css';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

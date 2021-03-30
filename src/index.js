import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/Global.css'
import { GlobalStorage } from './Context/GlobalContext';

ReactDOM.render(
  // <React.StrictMode>
    <GlobalStorage>
      <App />
    </GlobalStorage>,
  // <React.StrictMode>, 
  document.getElementById('root')
);
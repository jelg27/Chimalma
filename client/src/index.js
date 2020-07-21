
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Tablas from './reglog';
import Sesion from './Sesion';


ReactDOM.render(
  <Sesion />,
  document.querySelector('#root')
);

serviceWorker.unregister();
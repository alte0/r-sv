import React from 'react';
import ReactDOM from 'react-dom';
import './scss/fonts.scss';
import './scss/visually-hidden.scss';
import './index.scss';
import './scss/title.scss';
import './scss/btn.scss';
import './scss/eye.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

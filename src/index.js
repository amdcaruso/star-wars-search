import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/index.css';
import App from './App';
import registerServiceWorker from './assets/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

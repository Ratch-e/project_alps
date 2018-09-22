import React from 'react';
import ReactDOM from 'react-dom';
import Auth from './js/modules/auth/Auth'
import registerServiceWorker from './registerServiceWorker';
import './style/index.css';

ReactDOM.render(<Auth />, document.getElementById('root'));
registerServiceWorker();

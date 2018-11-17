import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Home from './home';

import * as serviceWorker from './serviceWorker';
//import { HashRouter as Router, Route, Link } from 'react-router-dom';
ReactDOM.render(

	<App />



	, document.getElementById('root'));
serviceWorker.unregister();

import React from 'react';
import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
//ReactDOM.render(<App />, document.getElementById('root'));

//const store = createStore(allReducers, window._REDUX_DEVTOOLS_EXTENSION_ &&  window._REDUX_DEVTOOLS_EXTENSION_());

ReactDOM.render(<App />, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

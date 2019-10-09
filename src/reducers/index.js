import counterReducer from './counterReducer';
import isLogged from './isLoggedReducer';

import {combineReducers} from 'redux';

const allReducers = combineReducers({counter: counterReducer, logged: isLogged});

export default allReducers;
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { terms } from './search.js';

export default combineReducers({
    terms,
    routing: routerReducer
});

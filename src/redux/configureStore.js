import { createStore, combineReducers ,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import resultsReducer from '../redux/results/results';

const finalReducer = combineReducers({ resultsReducer });
const store = createStore(finalReducer, applyMiddleware(thunk, logger));

export default store;
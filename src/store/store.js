import reduce from './reduce';
import {createStore,applyMiddleware} from "redux"
import logger from 'redux-logger';
import thunk from 'redux-thunk'
export const store = createStore(reduce,applyMiddleware(thunk,logger));
console.log(store.getState())
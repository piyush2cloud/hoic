import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import pageReducer from './reducers/pageReducer';
import rootReducer from './reducers';

const middlewares = [thunk];

export default (initialState) =>
  createStore(pageReducer, initialState, applyMiddleware(...middlewares));

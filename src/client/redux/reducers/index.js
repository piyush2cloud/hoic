import { combineReducers } from 'redux';

import pageReducer from './pageReducer';

// console.log(pageReducer);

export default combineReducers({
  page: pageReducer,
});

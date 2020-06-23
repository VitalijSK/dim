import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth/reducer.js';
import categories from './categories/reducer.js';
import posts from './posts/reducer.js';
import questions from './questions/reducer.js';
import calcReq from './calc-reg/reducer.js';

export default combineReducers({
  auth,
  categories,
  posts,
  questions,
  calcReq,
  routing: routerReducer,
});

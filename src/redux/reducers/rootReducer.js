import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import loadingReducer from './loadingReducer';
import userReducer from './userReducer';

export default combineReducers({
  todos: todosReducer,
  loaders: loadingReducer,
  user: userReducer
});

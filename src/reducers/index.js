import { combineReducers } from 'redux';
import usersReducer from './usersReducers';

const allReducers = combineReducers({
  users: usersReducer,
});

export default allReducers;

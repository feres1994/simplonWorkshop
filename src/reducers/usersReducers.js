import { ADD_USERS, DELETE_USERS, GET_ALL_USERS } from '../actions/types';
const initialState = [];

export default function usersReducer(state = initialState, action) {
  if (action.type === GET_ALL_USERS) {
    return action.payload;
  }
  if (action.type === ADD_USERS) {
    return [action.payload, ...state];
  }
  if (action.type === DELETE_USERS) {
    return state.filter((user) => user.id !== action.payload);
  }
  return state;
}

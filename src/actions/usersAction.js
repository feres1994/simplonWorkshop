import { ADD_USERS, DELETE_USERS, GET_ALL_USERS } from './types';
import Axios from 'axios';

/* get all user */

export const getAllUsers = (payload) => ({
  type: GET_ALL_USERS,
  payload,
});

export function getUsersFromApi() {
  return (dispatch) =>
    Axios.get('https://jsonplaceholder.typicode.com/users').then((res) =>
      dispatch(getAllUsers(res.data))
    );
}

/* add  user */
export const addUser = (payload) => ({
  type: ADD_USERS,
  payload,
});

/*delette user */

export const deleteUser = (payload) => ({
  type: DELETE_USERS,
  payload,
});

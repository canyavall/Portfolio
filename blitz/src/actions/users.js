import { defaultFecthGet } from './defaultFetch';
import { GET_USERS } from './defaultActionConstants';

export const getUsers = (users) => {
  return {
    type: GET_USERS,
    content: users
  }
}

export const getUsersList = () => {
    return defaultFecthGet(getUsers,"https://propulsion-blitz.herokuapp.com/api/users", "GET") ;
}

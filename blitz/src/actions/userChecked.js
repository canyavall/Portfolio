import { defaultFecthGet } from './defaultFetch';
import { GET_USERCHECKED } from './defaultActionConstants';

export const getUser = (user) => {
  return {
    type: GET_USERCHECKED,
    content: user
  }
}

export const getUserChecked = (id) => {
  return defaultFecthGet(getUser,"https://propulsion-blitz.herokuapp.com/api/users/"+id, "GET") ;
}

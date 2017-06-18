import { GET_CURRENTUSER, LOGOUT_CURRENTUSER } from './defaultActionConstants';


export const loginCurrentUser = (user) => {
  return {
    type: GET_CURRENTUSER,
    content: user
  }
}

export const userLogout = () => {
  return { type: LOGOUT_CURRENTUSER }
}

export const checkLogin = ({ email, password }) => (dispatch, getState) => {
  const headers = { 'Content-type': 'application/json' }
  const body = { email, password }
  const config = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body)
  };

  return fetch("https://propulsion-blitz.herokuapp.com/api/login", config)
    .then(res => {
      if (res.status === 200) return res.json();
        return res.status;
    })
    .then(user => {
      if (user !== false){
        localStorage.setItem('userToken', user.token);
        localStorage.setItem('userAvatar', user.avatar);
        localStorage.setItem('username', user.username);
        const action = loginCurrentUser(user);
        dispatch(action);
      }
    })
    .catch(err => {
          console.log('error: ', err);
      });
}

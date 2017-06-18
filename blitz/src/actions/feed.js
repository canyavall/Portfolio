import { defaultFecthGet } from './defaultFetch';
import { GET_FEED, LIKE_BLITZ_FEED, ADD_BLITZ_FEED } from './defaultActionConstants';

export const getFeed = (feed) => {
  return {
    type: GET_FEED,
    content: feed
  }
}

export const userLikeBlitz = (blitzId) => {
  return {
    type: LIKE_BLITZ_FEED,
    content: blitzId
  }
}

export const addUserBlitzToBLitzs = (blitz) => {
  return {
    type: ADD_BLITZ_FEED,
    content: blitz
  }
}

export const likeBLitz = (blitzId) => {
  return defaultFecthGet(userLikeBlitz, "https://propulsion-blitz.herokuapp.com/api/blitzs/"+blitzId+"/like", "POST") ;
}

export const getFeedList = () => {
  return defaultFecthGet(getFeed,"https://propulsion-blitz.herokuapp.com/api/feed", "GET") ;
}

export const AddUserBlitz = (content) => (dispatch, getState) => {
  const token = getState().currentuser.token;
  const config = {
    method: 'POST',
    headers: { 'Content-type': 'application/json',
               'Authorization': `Bearer ${token}`,
             },
    body: JSON.stringify(content)
  };

  return fetch("https://propulsion-blitz.herokuapp.com/api/blitzs", config)
    .then(res => {
      if (res.status === 200) return res.json();
        return res.status;
    })
    .then(blitz => {
      if (blitz !== false) dispatch(addUserBlitzToBLitzs(blitz));
    })
    .catch(err => {
          console.log('error: ', err);
      });
}

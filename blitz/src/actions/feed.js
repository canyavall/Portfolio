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

export const AddUserBlitz = (content) => {
  return defaultFecthGet(addUserBlitzToBLitzs,"https://propulsion-blitz.herokuapp.com/api/blitzs", "POST", content);
}

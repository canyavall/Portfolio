import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux'; // check we also require `applyMiddleware`
import thunk from 'redux-thunk'; // require the Middleware
import feed from './reducers/feed';
import currentuser from './reducers/currentuser';
import users from './reducers/users';
import userchecked from './reducers/userchecked'

const combinedRed = combineReducers({
  currentuser,
  feed,
  users,
  userchecked
})

const store = createStore(combinedRed,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

export default store;

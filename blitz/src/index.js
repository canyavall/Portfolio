import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import store from './service/store'
import Home from './components/Home';
import Login from './containers/Login';
import Feed from './containers/Feed';
import Users from './containers/Users';
import User from './containers/User'
import { loginCurrentUser } from './actions/currentuser';
import './index.css';

injectTapEventPlugin();

// Check localstorage to get the data from the user
function getToken() {
  const StorageCurrentUser = {
    token: localStorage.getItem('userToken'),
    username: localStorage.getItem('username'),
    avatar: localStorage.getItem('userAvatar'),
  }
  const action = loginCurrentUser(StorageCurrentUser);
  store.dispatch(action);
}

getToken();

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#ffa31a',
    },
});

ReactDOM.render(
          <MuiThemeProvider muiTheme={muiTheme}>
            <Provider store = {store}>
              <Router>
                <Switch>
                  <Route exact path="/" component={ Home } />
                  <Route exact path="/login" component={ Login } />
                  <Route exact path="/feed" component={ Feed } />
                  <Route exact path="/users" component={ Users } />
                  <Route exact path="/users/:userId" component={ User } />
                </Switch>
              </Router>
            </Provider>
          </MuiThemeProvider>,
          document.getElementById('root')
);

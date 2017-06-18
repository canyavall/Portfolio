import React from 'react';
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper';
import Tabs from 'material-ui/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import Header from './Header';
import {checkLogin} from '../actions/currentuser'
import {bodyContainer, paperStyle} from '../components/style';

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      password: '',
      email: ''
    }
  }

  changeEmail = (e) => {
    const email = e.currentTarget.value;
    this.setState({ email });
  }

  changePassword = (e) => {
    const password = e.currentTarget.value;
    this.setState({ password });
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.dispatch(checkLogin(this.state))
      .then(() => {
        if (this.props.currentuser.token.length > 0) this.props.history.push("/feed");
    });
  }

  render () {
    return (<div>
      <div>
        <Header isLoggedIn={this.props.isLoggedIn}/>
      </div>
      <div style= {bodyContainer}>
        <Paper style={paperStyle} zDepth={2}>
          <Tabs >
            <Tab label="Login" >
              <div>
                <form onSubmit={ this.submitForm }>
                  <input type="text" placeholder="Username" onChange={ this.changeEmail } />
                  <input type="password" placeholder="Password" onChange={ this.changePassword } />
                  <input type="submit" />
                </form>
              </div>
            </Tab>
            <Tab label="Register">
              <div>
                <form>
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Surname" />
                  <input type="text" placeholder="Email" />
                  <input type="text" placeholder="Username" />
                  <input type="password" placeholder="Password" />
                  <input type="submit" />
                </form>
              </div>
            </Tab>
          </Tabs>
        </Paper>
      </div>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    currentuser: state.currentuser
  };
}

export default connect(mapStateToProps)(Login);

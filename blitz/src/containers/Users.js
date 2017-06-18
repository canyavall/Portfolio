import React from 'react';
import Header from '../containers/Header';
import { bodyContainer } from '../components/style';
import { getUsersList } from '../actions/users';
import { connect } from 'react-redux';
import UserItem from '../components/UserItem';
import Loader from '../components/Loader';

/**
 * Show the users list
 * Request UserItem to fill the list
 * route: "/users"
 */
class Users extends React.Component {

  componentWillMount() {
    this.props.dispatch(getUsersList());
  }

  render () {
    if ( Object.keys(this.props.users).length === 0 ) return <Loader />;
      return (
          <div>
            <Header />
            <div style={bodyContainer}>
              { this.props.users.map((userData, index) => {
                if (userData.username !== this.props.currentuser.username){
                  return <UserItem key={ index }
                                   data={ userData }
                                   showLink={ true }/>
                }
                return false;
              })}
            </div>
          </div>
        )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    currentuser: state.currentuser
  };
}

export default connect(mapStateToProps)(Users);

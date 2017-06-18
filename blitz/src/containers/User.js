import React from 'react';
import Header from '../containers/Header';
import { bodyContainer } from '../components/style';
import { getUserChecked } from '../actions/userChecked';
import { connect } from 'react-redux';
import Loader from '../components/Loader';
import UserItem from '../components/UserItem';
import { likeBLitz } from '../actions/feed'


class User extends React.Component {

  componentWillMount() {
    //Check if this user is already loaded, if it is not, get from API
    if (this.props.userchecked._id !== this.props.match.params.userId)
      this.props.dispatch(getUserChecked(this.props.match.params.userId));
  }

  like = (blitzId) => {
    this.props.dispatch(likeBLitz(blitzId));
  }

  render () {
    //Loading
    if ( Object.keys(this.props.userchecked).length === 0 ) return <Loader />;

    //Prepare data to be send
    const data = {
      username: this.props.userchecked.username,
      avatar: this.props.userchecked.avatar,
      email: this.props.userchecked.email,
    }

    //We have the data, return it
    return (
        <div>
          <Header />
          <div style={bodyContainer}>
            <UserItem data={ data }
                      showLink={ false }
                      blitzs={ this.props.userchecked.blitzs }
                      like = { this.like }
                      isFollowed = { this.props.userchecked.isFollowed }/>
          </div>
        </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    userchecked: state.userchecked
  };
}

export default connect(mapStateToProps)(User);

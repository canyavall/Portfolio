import React from 'react';
import { AppBar } from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import {barButtonStyle} from '../components/style';
import {connect} from 'react-redux'
import { withRouter } from 'react-router';
import { userLogout } from '../actions/currentuser'
import Avatar from 'material-ui/Avatar';
import HomeIcon from 'material-ui/svg-icons/action/home';
import ChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import People from 'material-ui/svg-icons/social/people';
import LogOut from 'material-ui/svg-icons/image/adjust';
import {black} from 'material-ui/styles/colors';

const style = {
  icon: {
    color: 'white',
    marginRight: '20px',
    width: '40px',
    height: '40px '
  },
  avatar: {
    marginRight: '20px'
  }
}
class Header extends React.Component {

  render () {
    const rightButtonsLogged = (
        <div>
            <Link to="/"><HomeIcon style={style.icon} hoverColor={black}/></Link>
            <Link to="/feed"><ChatBubble style={style.icon} hoverColor={black}/></Link>
            <Link to="/users"><People style={style.icon} hoverColor={black}/></Link>
            <Avatar src={this.props.currentuser.avatar} style={style.avatar}/>
            <LogOut onClick={ this.logOut } style={style.icon} hoverColor={black}/>
        </div>
      );

    const rightButtonsNotLogged = (
        <div>
            <Link to="/"><FlatButton label="Home" style={barButtonStyle} /></Link>
            <Link to="/login"><FlatButton label="Login" style={barButtonStyle} /></Link>
        </div>
      );

    const rightButtons = (this.props.currentuser.token !== null) ?  rightButtonsLogged : rightButtonsNotLogged;
        return <div>
          <AppBar
            title="Welcome to Blitz"
            showMenuIconButton={ false }
            iconElementRight ={ rightButtons }
          >
          </AppBar>
        </div>;
  }

  logOut = () => {
    window.localStorage.clear();
    this.props.dispatch(userLogout());
    this.props.history.push("/");
  }
}

const ComposedWithRouter = withRouter(Header);

const mapStateToProps = (state) => {
  return { currentuser: state.currentuser };
}

export default connect(mapStateToProps)(ComposedWithRouter);

import React from 'react';
import {Card, CardText, CardHeader} from 'material-ui/Card';
import { Link } from 'react-router-dom';
import Blitz from '../components/Blitz';

const style = {
  title: {
    textAlign: 'left',
    height: '75px'
  },
  subtitle: {
    textAlign: 'center',
    fontSize: "25%"
  },
  div: {
    marginTop: "10px"
  }
}
/**
 * Print the user
 * Props:
 * *data: username, avatar, email
 * *blitzs: Array with blitzs
 * *showLink: Shows the link into the titles if it is true
 */
const UserItem = (props) => {

  //prepare data
  const data = props.data;
  const linkTo = "users/" + data._id;
  const title = (props.showLink) ? (<Link to={ linkTo }>{ data.username }</Link>) : (<div>{ data.username }</div>)
  const Blitzs = (props.blitzs) ? <CardText> {props.blitzs.map((blitz, index) => <Blitz key={index}
                                                                                        data={blitz}
                                                                                        showFullHeader={ false }
                                                                                        like = { props.like }
                                                                                        isFollowed = {props.isFollowed}
                                                                                        />)}  </CardText>  : "";

  // print data
  return <div style={style.div}>
          <Card expanded={false}>
            <CardHeader
              title={ title }
              avatar={ data.avatar }
              actAsExpander={ false }
              showExpandableButton={ false }
              subtitle={ data.email }
              style={ style.title }
              subtitleStyle={ style.subtitle }
            />
              { Blitzs }
            </Card>
          </div>
}


export default UserItem;

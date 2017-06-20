import React from 'react';
import {Card, CardText, CardHeader} from 'material-ui/Card';
import { Link } from 'react-router-dom';
import Blitz from '../components/Blitz';
import { userItemStyle } from './style';
import Follow from 'material-ui/svg-icons/action/grade';

/**
 * Print the user
 * Props:
 * *data: username, avatar, email
 * *blitzs: Array with blitzs
 * *showLink: Shows the link into the titles if it is true
 */
const UserItem = (props) => {
  console.log(props);
  //prepare data
  const data = props.data;
  const linkTo = "users/" + data._id;
  //const favorite = (props.isFavorit) ? <Like style={ isLiked } onClick={() => props.like(props.data._id)}/> : "";
  const title = (props.showLink) ? (<Link to={ linkTo }>{ data.username }</Link>) : (<div>{ data.username }</div>)
  const Blitzs = (props.blitzs) ? <CardText> {props.blitzs.map((blitz, index) => <Blitz key={index}
                                                                                        data={blitz}
                                                                                        showFullHeader={ false }
                                                                                        like = { props.like }
                                                                                        isFollowed = {props.isFollowed}
                                                                                        />)}  </CardText>  : "";


  let isFollowedIcon = { marginTop: "15px", marginRight: "20px", float: "right", cursor: "pointer", zIndex: 100, position: "relative"};
  if (props.isFollowed) isFollowedIcon['color'] = '#ff9900';
  const isFollowed = (props.isFollowed) ? <Follow style={ isFollowedIcon } onClick={() => console.log("click")}/> : "";
  // print data
  return <div style={userItemStyle.div}>
          <Card expanded={false}>
            <CardHeader
              title={ title }
              avatar={ data.avatar }
              subtitle={ data.email }
              style={ userItemStyle.title }
              subtitleStyle={ userItemStyle.subtitle }
            />
              { isFollowed }
              { Blitzs }
            </Card>
          </div>
}


export default UserItem;

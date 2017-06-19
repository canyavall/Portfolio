import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { Link } from 'react-router-dom';
import Like from 'material-ui/svg-icons/action/favorite';
import { blitzStyle } from './style';

/**
 * Shows a blitz
 * props:
 * *Data: User data
 * *ShowHeader: Toggle to show the cardheader
 */
const Blitz = (props) => {

  //Prepare data
  const time = Math.floor(((new Date().getTime() - new Date(props.data.created_at))/ (1000*60*60*24))) + " days ago";
  const titleToLink =  "users/" + props.data._user._id;
  const titleFull = (<Link to={ titleToLink }>{ props.data._user.username }</Link>);

  let isLiked = { marginTop: "15px", marginRight: "20px", float: "right", cursor: "pointer", zIndex: 100, position: "relative"};
  if (props.data.isLiked) isLiked['color'] = '#ff9900';

  const likeIcon = (props.isFollowed) ? <Like style={ isLiked } onClick={() => props.like(props.data._id)}/> : "";

  const cardHeaderFull = (<CardHeader
            title={ titleFull }
            subtitle={ time }
            avatar={ props.data._user.avatar }
            style={ blitzStyle.title }
            subtitleStyle={ blitzStyle.subtitle }
          /> );

  const cardHeaderSimple = (<CardHeader
            title={ time }
            style={ blitzStyle.title }
          />);

  const cardHeader =  (props.showFullHeader) ? cardHeaderFull : cardHeaderSimple;

  //Print
  return  <div style={blitzStyle.div}>
            <Card >
              { likeIcon }
              { cardHeader }
              <CardText style={blitzStyle.cardText}><hr /> { props.data.content } </CardText>
            </Card>
          </div>
}

export default Blitz;

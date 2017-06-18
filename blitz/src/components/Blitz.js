import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { Link } from 'react-router-dom';
import Like from 'material-ui/svg-icons/action/favorite';

const blitzStyle = {
  title: {
    textAlign: 'left',
    height: '50px',
    fontWeight: 'bold'
  },
  time: {
    fontSize: "20%"
  },
  action: {
    fontSize: "30%",
  },
  div: {
    marginTop: "10px"
  }
}
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

  let isLiked = {};
  if (props.data.isLiked) {
    isLiked = { textAlign: 'right',  marginLeft: '375px' , color: '#ff9900' }
  } else {
    isLiked = { textAlign: 'right', marginLeft: '375px' };
  }

  const likeIcon = (props.isFollowed) ? <Like style={ isLiked } onClick={() => props.like(props.data._id)}/> : "";

  const cardHeaderFull = (<CardHeader
            title={ titleFull }
            actAsExpander={ false }
            showExpandableButton={ false }
            subtitle={ time }
            avatar={ props.data._user.avatar }
            style={ blitzStyle.title }
            subtitleStyle={ blitzStyle.time }
          > { likeIcon }</CardHeader>);

  const cardHeaderSimple = (<CardHeader
            title={ time }
            actAsExpander={ false }
            showExpandableButton={ false }
            style={ blitzStyle.title }
          >  { likeIcon }</CardHeader>);

  const cardHeader =  (props.showFullHeader) ? cardHeaderFull : cardHeaderSimple;


  //Print
  return <div style={blitzStyle.div}>
          <Card >
             { cardHeader }
             <CardText style={blitzStyle.cardText}><hr /> { props.data.content } </CardText>
            </Card>
          </div>
}

export default Blitz;

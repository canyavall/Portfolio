import React from 'react';
import { connect } from 'react-redux'
import Header from './Header';
import { bodyContainer } from '../components/style';
import { getFeedList } from '../actions/feed';
import Blitz from '../components/Blitz';
import Loader from '../components/Loader';
import { likeBLitz } from '../actions/feed';
import AddBlitz from './AddBlitz';

class Feed extends React.Component {

  componentWillMount() {
    this.props.dispatch(getFeedList());
  }

  like = (blitzId) => {
    this.props.dispatch(likeBLitz(blitzId));
  }

  render () {
    console.log(this.props);
    if ( Object.keys(this.props.feed).length === 0 ) return <Loader />;
      return (
          <div>
            <Header />
            <div style={bodyContainer}>
              <AddBlitz />
              { this.props.feed.map((blitz, index) => <Blitz key={index}
                                                             data={blitz}
                                                             showFullHeader={ true }
                                                             like={ this.like }
                                                             isFollowed={ true }
                                                             />)}
            </div>
          </div>
        )
  }
}

const mapStateToProps = (state) => {
  return {
    feed: state.feed
  };
}

export default connect(mapStateToProps)(Feed);

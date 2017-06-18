import React from 'react';
import {connect} from 'react-redux'
import { Card, CardText } from 'material-ui/Card';
import { AddUserBlitz } from '../actions/feed'

class AddBlitz extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      content: ''
    }
  }

    changeBlitzContent = (e) => {
      const content = e.currentTarget.value;
      this.setState({ content });
    }

    submitForm = (e) => {
      e.preventDefault();
      this.props.dispatch(AddUserBlitz(this.state));
    }

    render () {
      const blitzStyle = {
        div: {
          marginTop: "10px"
        }
      }

      //Print
      return <div style={blitzStyle.div}>
              <Card >
                 <CardText style={blitzStyle.cardText}>
                 <div>
                   <form onSubmit={ this.submitForm }>
                     <input type="textarea"
                            placeholder="Write your blitz"
                            onChange={ this.changeBlitzContent }
                            maxLength="140"
                            rows="5"
                            />
                     <input type="submit" />
                   </form>
                 </div>
                  </CardText>
                </Card>
              </div>
    }
}

const mapStateToProps = (state) => {
  return {
    feed: state.feed
  };
}

export default connect(mapStateToProps)(AddBlitz);

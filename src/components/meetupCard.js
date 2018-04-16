import React, { Component } from 'react';
import MeetupRsvpList from './meetupRsvpList'

import '../styles/Card.css';

class MeetupCard extends Component {
  displayDescription() {
    return {__html: this.props.event.description};
  }
  render() {
    return (
      <div className="card card-depth-1">
        <div>
          <h4>{this.props.event.name}</h4>
          <h6>{this.props.event.local_date}</h6>
          <p dangerouslySetInnerHTML={this.displayDescription()} />
        </div>
        <div>
          <h5>{this.props.event.venue.name}</h5>
          <p>{this.props.event.venue.address_1}</p>
          <p>{this.props.event.venue.city}</p>
          <p>{this.props.event.venue.state}</p>
        </div>
        <MeetupRsvpList eventId={this.props.event.id} />
      </div>
    );
  }
}

export default MeetupCard;
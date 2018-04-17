// External Dependencies
import React, { Component } from 'react';
import MeetupRsvpList from './meetupRsvpList'

// Internal Dependencies
import '../styles/Card.css';

// Local Variables
const cardWrapper = {
  padding: '1.0em',
  textAlign: 'left',
  background: '#fff',
  borderRadius: '2px',
  display: 'inline-block',
  margin: '1rem',
  position: 'relative'
}
// Component Definition
export default class MeetupCard extends Component {
  displayDescription() {
    return { __html: this.props.event.description };
  }
  render() {
    const { event } = this.props;
    return (
      <div style={cardWrapper} className="card-depth-1">
        <div>
          <h4>{event.name}</h4>
          <h6>{event.local_date}</h6>
          <p dangerouslySetInnerHTML={this.displayDescription()} />
        </div>
        <div>
          <h5>{event.venue.name}</h5>
          <p>{event.venue.address_1}</p>
          <p>{event.venue.city}</p>
          <p>{event.venue.state}</p>
        </div>
        <MeetupRsvpList eventId={event.id} />
      </div>
    );
  }
}
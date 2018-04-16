import React, { Component } from 'react';

import '../styles/Card.css';

class MeetupAttendee extends Component {
  render() {
    return (
      <div className="card card-depth-1">
        <div>
          <h4>{this.props.attendeeData.member.name}</h4>
          {/* <h6>{this.props.event.local_date}</h6> */}
        </div>
        <div>
          {/* <h5>{this.props.event.venue.name}</h5>
          <p>{this.props.event.venue.address_1}</p>
          <p>{this.props.event.venue.city}</p>
          <p>{this.props.event.venue.state}</p> */}
        </div>
      </div>
    );
  }
}

export default MeetupAttendee;
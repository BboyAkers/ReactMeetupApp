import React, { Component } from 'react';

import '../styles/Card.css';

class MeetupAttendee extends Component {
  render() {
    return (
      <div>
        <div>
          <img className="thumbnail-image" src={this.props.attendeeData.member.photo.thumb_link} alt="thumbnail image"/>
          <h4 className="display-inline-block attendee-name">{this.props.attendeeData.member.name}</h4>
        </div>
        <br/>
        <hr />
      </div>
    );
  }
}

export default MeetupAttendee;

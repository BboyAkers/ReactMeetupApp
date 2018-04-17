// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import '../styles/Card.css';

// Local Variables
const imgStyle = {
  float: 'left',
  borderRadius: '20px'
}

const attendeeStyle = {
  display: 'inline-block',
  marginLeft: '15px'
}

// Component Definition
export default class MeetupAttendee extends Component {
  render() {
    const { attendeeData } = this.props;
    return (
      <div>
        <div>
          <img style={imgStyle} src={attendeeData.member.photo.thumb_link} alt="Attendees" />
          <h4 style={attendeeStyle}>{attendeeData.member.name}</h4>
        </div>
        <br />
        <hr />
      </div>
    );
  }
}

// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import MeetupCard from './meetupCard'

// Local Variables
const listStyles = {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 100

}

// Component Definition
export default class MeetupList extends Component {

  render() {
    const { events } = this.props;
    return (
      <div style={listStyles}>
        {events.map(event =>
          <div key={event.id}>
            <MeetupCard event={event} />
          </div>
        )}
      </div>
    );
  }
}
// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import MeetupCard from './meetupCard'

// Component Definition
export default class MeetupList extends Component {

  render() {
    const { events } = this.props;
    return (
      <div>
        {events.map(event =>
          <div key={event.id}>
            <MeetupCard event={event} />
          </div>
        )}
      </div>
    );
  }
}
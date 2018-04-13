import React, { Component } from 'react';

import MeetupCard from './meetupCard'
class MeetupList extends Component {

  render() {   
    return (
      <div>
         {this.props.events.map((event) => <div key={event.id}><MeetupCard event={event} /></div>)}
      </div>
    );
  }
}

export default MeetupList;
import React, { Component } from 'react';

class MeetupCard extends Component {
  render() {
    return (
      <div>
        <div>
          <h4>{this.props.event.name}</h4>
          <h6>{this.props.event.local_date}</h6>
          <p>
            {this.props.event.description}
          </p>
        </div>
        <div>
          <h5>{this.props.event.venue.name}</h5>
          <p>{this.props.event.venue.address_1}</p>
          <p>{this.props.event.venue.city}</p>
          <p>{this.props.event.venue.state}</p>
        </div>
      </div>
    );
  }
}

export default MeetupCard;
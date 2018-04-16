import React, { Component } from 'react';

import MeetupAttendee from './meetupAttendee';
import '../styles/Card.css';
import jsonp from 'jsonp-es6';
import Spinner from 'react-easy-spinner';
import Modal from 'react-modal';

class MeetupRsvpList extends Component {
  state = {
    attendeesModalIsOpen: false,
    attendees: null
  };
  openAttendeesModal() {
    this.setState({
      attendeesModalIsOpen: true
    }, () => {
      setTimeout(this.viewAttendees.bind(this));
    });
  }
  closeAttendeesModal() {
    this.setState({
      attendeesModalIsOpen: false
    });
  }
  viewAttendees() {
    let API_KEY = '<INSERT_API_KEY>';
    return jsonp(`https://api.meetup.com/reactjs-dallas/events/${this.props.eventId}/rsvps?key=${API_KEY}&sign=true&photo-host=public&response=yes`)
    .then(res => {
      const attendees = res.data;
      this.setState({ 
        attendees 
      });
      console.log(attendees)
    });
  }

  render() {   
    const {attendees, attendeesModalIsOpen} = this.state;
    const loaded = attendees !== null;

    let settings = {
      shape: "triangleUp",
      animation: "pulse",
      time: "2s",
      duration: 'infinite',
      opacity: '0.3',
      bgColor: '#27556c',
      elColor: '#2d1557'
    };

    let attendeesComponents = null;

    if(loaded && attendees.length > 0) {
      attendeesComponents =  attendees.map(attendeeData =><div key={attendeeData.member.id}><MeetupAttendee attendeeData={attendeeData}/></div>);
    }

    return (
      <div>
        <p>{this.props. nbhu}</p>
        <div className="btn btn-default" 
          onClick={this.openAttendeesModal.bind(this)}>View Attendees</div>
        <Modal
          isOpen={attendeesModalIsOpen}
          ariaHideApp={false}>
          <h1 className="center-text">Da homies who said yes</h1>
          <br/>
          {loaded ? null : <Spinner {...settings}/>}
          {attendeesComponents}
          <div className="bottom-right">
            <button  className="btn btn-default" onClick={this.closeAttendeesModal.bind(this)}>Close the modal!</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default MeetupRsvpList;

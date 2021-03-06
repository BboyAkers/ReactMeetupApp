// External Dependencies
import React, { Component } from 'react';
import jsonp from 'jsonp-es6';
import Modal from 'react-modal';
import Spinner from 'react-easy-spinner';

// Internal Dependencies
import Button from './Button';
import MeetupAttendee from './meetupAttendee';
import '../styles/Card.css';

const modalButtonStyle = {
  position: 'absolute',
  right: 0
}

// Component Definition
export default class MeetupRsvpList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attendees: null,
      attendeesModalIsOpen: false
    }
    this.openAttendeesModal = this.openAttendeesModal.bind(this);
    this.closeAttendeesModal = this.closeAttendeesModal.bind(this);
    this.viewAttendees = this.viewAttendees.bind(this);
  }

  openAttendeesModal() {
    this.setState({
      attendeesModalIsOpen: true
    }, () => {
      setTimeout(this.viewAttendees);
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
    const {
      attendees,
      attendeesModalIsOpen
    } = this.state;

    const {
      nbhu
    } = this.props

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

    if (loaded && attendees.length > 0) {
      attendeesComponents = attendees.map(attendeeData => <div key={attendeeData.member.id}><MeetupAttendee attendeeData={attendeeData} /></div>);
    }

    return (
      <div>
        <p>{nbhu}</p>
        <div className='btn btn-default' onClick={this.openAttendeesModal}>View Attendees</div>
        <Modal
          isOpen={attendeesModalIsOpen}
          ariaHideApp={false}>
          <h1 style={{ textAlign: 'center' }}>Da homies who said yes</h1>
          <br />
          {loaded ? null : <Spinner {...settings} />}
          {attendeesComponents}
          <div style={modalButtonStyle}>
            <button className="btn btn-default" onClick={this.closeAttendeesModal}>Close the modal!</button>
          </div>
        </Modal>
      </div>
    );
  }
}

// External Dependencies
import React, { Component } from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import jsonp from 'jsonp-es6';

// Internal Dependencies
import MeetupList from './components/meetupList';
import Navbar from './components/Navbar';

// Local Variables
const wrapper = {
  background: '#F4F4F4',
  fontFamily: 'ariel',
  textAlign: 'center'
}

// Component Definition
class App extends Component {
  state = {
    events: []
  }
  componentDidMount() {
    let API_KEY = '13f4a733f524e2a2e1e334637186651';
    jsonp(`https://api.meetup.com/reactjs-dallas/events?key=${API_KEY}&sign=true&photo-host=public&page=20`)
      .then(res => {
        const events = res.data;
        this.setState({ events });
        console.log(events)
      })
  }

  render() {
    const { events } = this.state;
    return (
      <div style={wrapper}>
        <CssBaseline />
        <Navbar />
        <MeetupList events={events} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

//Dependencies
import jsonp from 'jsonp-es6';

import MeetupList from './components/meetupList';

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
    return (
      <div className="App">
        <MeetupList events={this.state.events} />
      </div>
    );
  }
}

export default App;

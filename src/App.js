import React, { Component } from 'react';
import './App.css';

import BigButton from './components/big-button/big-button';
import BigSwitch from './components/big-switch/big-switch';
import StatusButton from './components/status-button/status-button';
import StatusImage from './components/status-image/status-image';
import UserList from './components/user-list/user-list';
import UserPreview from './components/user-preview/user-preview';

//only for testing purposes
const busyHome = {
  name: 'Jane',
  status: 'busy',
  place: 'home-office'
}

const busyCampus = {
  name: 'Jane',
  status: 'busy',
  place: 'on-campus'
}

const availableHome = {
  name: 'Jane',
  status: 'available',
  place: 'home-office'
}

const availableCampus = {
  name: 'Jane',
  status: 'available',
  place: 'on-campus'
}

class App extends Component {
  constructor(props) {
    super(props);
    // posible values "available/busy and on-campus/"
    this.state = {
      myUser: busyHome
    }
  }
  render() {
    const available = this.state.myUser.status === 'available';
    const onCampus = this.state.myUser.place === 'on-campus';
    return (
      <div className="App">
        <BigButton />
        <BigSwitch />
        <StatusButton available={available} />
        <StatusImage available={available} onCampus={onCampus} />
        <UserPreview />
        <UserList />
      </div>
    );
  }
}

export default App;
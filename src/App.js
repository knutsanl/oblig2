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
  name: 'JaneBuHo',
  status: 'busy',
  place: 'home-office'
}

const busyCampus = {
  name: 'JaneBuCa',
  status: 'busy',
  place: 'on-campus'
}

const availableHome = {
  name: 'JaneAvHo',
  status: 'available',
  place: 'home-office'
}

const availableCampus = {
  name: 'JaneAvCa',
  status: 'available',
  place: 'on-campus'
}

const users = [busyHome, busyCampus, availableHome, availableCampus];

class App extends Component {
  constructor(props) {
    super(props);
    // posible values "available/busy and on-campus/home-office"
    this.state = {
      myUser: busyHome
    }
  }
  render() {
    const available = this.state.myUser.status === 'available';
    const onCampus = this.state.myUser.place === 'on-campus';
    const config = {textWhenChecked: 'on-campus', textWhenUnchecked:'Home office'};
    return (
      <div className="App">
        <p>This is the BigButton</p>
        <BigButton text={this.state.myUser.place} enabled={available}/>
        
        <p>This is the BigSwitch</p>
        <BigSwitch config={config} checked={onCampus}/>

        <p>This is the StatusButton</p>
        <StatusButton available={available} />

        <p>This is the StatusImage</p>
        <StatusImage available={available} onCampus={onCampus} />

        <p>This is the UserPreview</p>
        <UserPreview user={this.state.myUser}/>

        <p>This is the UserList</p>
        <UserList users={users}/>
      </div>
    );
  }
}

export default App;
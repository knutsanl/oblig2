import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import USERS from './users';

import Home from './components/home/Home';
import UserList from './components/user-list/user-list';
import NotFound from './components/NotFound';
import About from './components/about/About';
import PrivateRoute from './routes/PrivateRoute';
import Login from './components/login/Login';
import ForgotPassword from './components/forgot/forgot';
import SignUp from './components/sign-up/sign-up';
import Navigation from './components/nav-bar/nav';
import { isLoggedIn } from './utils/isAuth';

class App extends Component {
  constructor(props) {
    super(props);
    // posible values "available/busy and on-campus/home-office"
    this.state = {
      myUser: { ...USERS[0] },
      users: [...USERS]
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="App">
            <header className="App-header">
              <Navigation handleLogOut={this.handleLogOut} isAuth={this.state.isAuth}/>
            </header>
            <main>
              <Switch>
                <Route path="/dashboard">
                  <UserList users={this.state.users} />
                </Route>
                <PrivateRoute exact path="/user">
                  <Home user={this.state.myUser} onChangePlace={this.updateUserPlace} onChangeStatus={this.updateUserStatus} />
                </PrivateRoute>
                <Route path="/login">
                  <Login handleLogIn={this.handleLogIn} redirect={this.state.redirect}/>
                </Route>
                <Route path="/forgot">
                  <ForgotPassword/>
                </Route>
                <Route path="/signUp">
                  <SignUp/>
                </Route>
                <Route path="/">
                  <About />
                </Route>
                <Route>
                  <NotFound />
                </Route>
              </Switch>
            </main>
          </div>
        </Router>
      </div>
    );
  }
  handleLogIn = () => {
    localStorage.setItem('userAuth', JSON.stringify(true));
    this.setState({ redirect: "/user", isAuth: isLoggedIn() });
    console.log("You're logged in");
};

handleLogOut = () => {
    localStorage.removeItem('userAuth');
    this.setState({ isAuth: isLoggedIn(), redirect: null });
};
componentDidMount(){
  const isAuth = isLoggedIn();
  this.setState({isAuth});
}
  updateUserPlace = (onCampus) => {
    const place = onCampus ? 'on-campus' : 'home-office';
    this.setState((state) => {

      let newUserList = [...this.state.users];
      //myUser is always in pos[0] in the demo. However, in real app this will not be true.
      newUserList[0].place = place;

      return {
        myUser: {
          ...state.myUser,
          place
        },
        users: newUserList
      }
    });
  }

  updateUserStatus = (available) => {
    const status = available ? 'available' : 'busy';
    this.setState((state) => {

      let newUserList = [...this.state.users];
      //myUser is always in pos[0] in the demo. However, in real app this will not be true.
      newUserList[0].status = status;

      return {
        myUser: {
          ...state.myUser,
          status
        },
        users: newUserList
      }
    });
  }
}

export default App;
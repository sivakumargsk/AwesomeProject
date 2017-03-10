import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Users from './users'
import AddUser from './addUser'

export default class Root extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="users" component={Users} title="LIST OF USERS" initial={true} />
          <Scene key="addUser" component={AddUser} title="ADD NEW USER" />
        </Scene>
      </Router>
    )
  }
}

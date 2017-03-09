import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './home';
import CountVisits from './countVisits';

export default class Root extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home" initial={true} />
          <Scene key="countVisits" component={CountVisits} title="Count Visits" />
        </Scene>
      </Router>
    )
  }
}

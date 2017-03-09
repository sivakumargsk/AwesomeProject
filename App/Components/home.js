import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {
  constructor (props){
    super(props);
    this.state = { count: 1 }
  }
  increaseCount() {
    this.setState({count: this.state.count + 1});
  }
  goToCountVisits() {
    Actions.countVisits({
      count: this.state.count,
      visited: this.increaseCount.bind(this)
    })
  }
  render() {
    return (
      <View style={{flex: 1, paddingTop: 55}}>
        <Text>
          Welcome to Home Page
        </Text>
        <Text onPress={this.goToCountVisits.bind(this)}>
          Press me to see visits page.
        </Text>
    </View>
    )
  }
}

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class  CountVisits extends Component {
  componentWillMount() {
    this.props.visited();
  }
  render() {
    return (
      <View style={{margin: 128}}>
        <Text>No of vistits : {this.props.count}</Text>
      </View>
    )
  }
}

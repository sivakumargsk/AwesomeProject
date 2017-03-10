import React, { Component } from 'react';
import { View, Text, ListView, Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class userRow extends Component {
  render() {
    return (
      <View style={{padding: 20}}>
        <Text>User Id : {this.props.userId}</Text>
        <Text>User Name : {this.props.userName}</Text>
        <Text>Gender : {this.props.gender}</Text>
        <Text>Role : {this.props.role}</Text>
      </View>
    )
  }
}

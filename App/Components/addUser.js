import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class  AddUser extends Component {
  render() {
    return (
      <View style={{flex: 1, paddingTop: 55}}>
        <View>
          <TextInput
           style={{height: 40}}
           placeholder= "Enter User Name"
           onChangeText = {this.props.userNameOnChange} />
          <TextInput
           style={{height: 40}}
           placeholder= "Enter Gender"
           onChangeText = {this.props.genderOnChange} />
         <TextInput
          style={{height: 40}}
          placeholder= "Enter Role"
          onChangeText = {this.props.roleOnChange} />
        </View>
        <View style={{backgroundColor: 'powderblue'}}>
          <Button
            onPress={this.props.addNewUser}
            title="Add New User"
            color="#457852" >
            <Text> Add User </Text>
          </Button>
        </View>
      </View>
    )
  }
}

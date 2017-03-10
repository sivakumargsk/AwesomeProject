import React, { Component } from 'react';
import { View, Text, ListView, Keyboard, Button, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

import UserRow from './userRow';

export default class Users extends Component {
  constructor (props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      nextUserId: 2,
      userName: '',
      gender: '',
      role: '',
      users: [{userId: 1, userName: "G Siva kumar", gender: "Male", role: "Admin"}],
      dataSource: ds.cloneWithRows(
        [{userId: 1, userName: "G Siva kumar", gender: "Male", role: "Admin"}]
      )
    }
    this.userNameOnChange = this.userNameOnChange.bind(this);
    this.genderOnChange = this.genderOnChange.bind(this);
    this.roleOnChange = this.roleOnChange.bind(this);
    this.addNewUser = this.addNewUser.bind(this);
    this.onPressAddUserButton = this.onPressAddUserButton.bind(this);
  }

  userNameOnChange(userName) {
    this.setState ( {userName});
  }

  genderOnChange(gender) {
    this.setState ( {gender});
  }

  roleOnChange(role) {
    this.setState ( {role});
  }

  addNewUser () {
    const newUsers = [
      ...this.state.users,
      { userId: this.state.nextUserId,
        userName: this.state.userName,
        gender: this.state.gender,
        role: this.state.role }
      ]
    this.setState({
      users: newUsers,
      dataSource: this.state.dataSource.cloneWithRows(newUsers),
      nextUserId: this.state.nextUserId + 1,
      userName: '',
      gender: '',
      role: ''
    });
    Actions.pop();
  }

  onPressAddUserButton() {
      Actions.addUser({
        userNameOnChange: this.userNameOnChange,
        genderOnChange: this.genderOnChange,
        roleOnChange: this.roleOnChange,
        addNewUser: this.addNewUser
       })
  }

  render() {
    return (
      <View style={{flex: 1, paddingTop: 55}}>
        <View style={{backgroundColor: 'powderblue'}}>
          <Button
            onPress={this.onPressAddUserButton}
            title="Add New User"
            color="#841584" >
          </Button>
        </View>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={(user) => {
            return (
              <UserRow
                key={user.userId}
                userId={user.userId}
                userName={user.userName}
                gender={user.gender}
                role={user.role} /> )
          }}
        />
      </View>
    )
  }
}

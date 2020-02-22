import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './Login';
import ChallengeList from "./ChallengeList";

import ApiService from "./rest/ApiService";

const Stack = createStackNavigator();

export default class App extends Component {

  constructor(prop) {
    super(prop);
    this.state = {
      isAuthenticated: false,
    }
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen 
            name="ChallengeList"
            component={ChallengeList}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

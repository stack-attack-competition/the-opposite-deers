import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ChallengeList from "./ChallengeList";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Home"
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

import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login';
import Home from "./Home";
import ChallengeList from "./ChallengeList";
import ApiService from "./rest/ApiService";


export default class App extends Component {

  constructor(prop) {
    super(prop);
    this.state = {
      isAuthenticated: true,
    }
  }

  render() {
    let targetComponent = <Login/>;

    if (this.state.isAuthenticated) {
      targetComponent = <ChallengeList/>
    }
    return (
        targetComponent
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

import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import ChallengeList from "./ChallengeList";
import Auth from "./Auth";

export default class App extends Component {

  constructor(prop) {
    super(prop);
    this.state = {
      isAuthenticated: false,
    };
  }

  render() {
    let targetComponent = <Auth/>;

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

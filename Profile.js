import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Profile extends Component {
  render() {
      return (
        <View style={{alignItems: 'center'}}>
          <Text>Hello {this.props.name}!</Text>
        </View>
      );
  }
}

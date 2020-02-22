import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Profile extends Component {
  render() {
      return (
        <View style={{alignItems: 'center'}}>
          <Text>Hello {this.props.name}!</Text>
              <TouchableHighlight onPress={this._onPressButton}>
          <Image
            style={styles.button}
            source={require('./myButton.png')}
          />
        </TouchableHighlight>
        </View>
      );
  }
}

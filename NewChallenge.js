import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
} from 'react-native';
import DatePicker from 'react-native-date-picker'

import { Challenge } from './model/Challenge'

export default class ChallengeList extends Component {

  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {
      title: '',
      description: '',
      endDate: new Date()
    }
  }
  

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<View>
					<TextInput
						style={{height: 40, width: 200}}
						placeholder="Title"
						onChangeText={(title) => this.setState({title})}
					/>
					<TextInput
            multiline
						style={{height: 40, width: 200}}
						placeholder="Description"
						onChangeText={(description) => this.setState({description})}
					/>
          <DatePicker
            date={this.state.endDate}
            onDateChange={(endDate) => this.setState({endDate})}
          />
					<Button
						title="Create"
						onPress={() => {
							this.navigation.navigate('Home')
						}}
					/>
				</View>
			</View>
    );
  }

}


import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
} from 'react-native';

import { Challenge } from './model/Challenge'

export default class NewChallenge extends Component {

  constructor(props) {
    super(props);
    //this.navigation = props.navigation;
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
					<Button
						title="Create"
						onPress={() => {
							this.navigation.navigate('ChallengeList')
						}}
					/>
				</View>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22,
		backgroundColor: "#4EAD9A"
	},
	containerButton: {
		alignItems: 'center',
		padding: 10,
		height: 64,
	},
	button: {
		height: 100
	},
	listItem: {
		margin: 8
	},
	listInnerItem: {
		padding: 8,
		backgroundColor: "#448E7F"
	},
	itemData: {
		padding: 10,
		fontSize: 16,
		color: "white"
	},
});



import React, {Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Button
} from 'react-native';

import {Challenge} from './model/Challenge'

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
			<View style={styles.container}>
				<TextInput
					style={styles.inputField}
					placeholder="Title"
					onChangeText={(title) => this.setState({title})}
				/>
				<TextInput
					multiline
					style={styles.inputField}
					placeholder="Description"
					onChangeText={(description) => this.setState({description})}
				/>
				<View style={styles.containerButton}>
					<Button
						title="Create"
						color="#5661B3"
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
		justifyContent: 'center',
		alignItems: "center",
		backgroundColor: "#3c7d71"
	},
	containerButton: {
		padding: 10,
		height: 64,
		width: "80%"
	},
	button: {
		height: 100
	},
	inputField: {
		height: 40,
		width: '80%',
		margin: 12,
		padding: 6,
		backgroundColor: "#376e64"
	}
});





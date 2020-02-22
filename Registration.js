import React, {Component} from 'react';
import {Button, StyleSheet, TextInput, View} from "react-native";

export default class Registration extends Component {

	BASE_URL = 'https://stack-attack-bed.herokuapp.com';

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			pictureUrl: '',
			firstName: '',
			lastName: '',
			confirmPassword: ''
		};
		this.navigation = props.navigation;
	}

	register = () => {
		const newUser = {
			"email": this.state.email,
			"password": this.state.password,
			"firstName": this.state.firstName,
			"lastName": this.state.lastName,
			"pictureUrl": "http://www.gravatar.com/avatar/b2e811746d080ead447cc74ab480e49f"
		};

		fetch(`${this.BASE_URL}/auth/register`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newUser),
		})
		.then(data => {
			return data.json();
		})
		.then((user) => {
			this.props.changeRegistrationStatus(true);

		})
		.catch(error => {
			console.log(error);
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.inputField}
					placeholder="Email"
					textContentType={'emailAddress'}
					onChangeText={(email) => this.setState({email: email})}
					value={this.state.email}
				/>
				<TextInput
					style={styles.inputField}
					placeholder="Picture URL"
					textContentType={'URL'}
					onChangeText={(pictureUrl) => this.setState({pictureUrl: pictureUrl})}
					value={this.state.pictureUrl}
				/>
				<TextInput
					style={styles.inputField}
					placeholder="First name"
					textContentType={'name'}
					onChangeText={(firstName) => this.setState({firstName: firstName})}
					value={this.state.firstName}
				/>
				<TextInput
					style={styles.inputField}
					placeholder="Last name"
					textContentType={'familyName'}
					onChangeText={(lastName) => this.setState({lastName: lastName})}
					value={this.state.lastName}
				/>
				<TextInput
					style={styles.inputField}
					placeholder="Password"
					textContentType={'newPassword'}
					secureTextEntry={true}
					onChangeText={(password) => this.setState({password: password})}
					value={this.state.password}
				/>
				<TextInput
					style={styles.inputField}
					placeholder="Confirm Password"
					textContentType={'newPassword'}
					secureTextEntry={true}
					onChangeText={(confirmPassword) => this.setState({confirmPassword: confirmPassword})}
					value={this.state.confirmPassword}
				/>
				<View
					style={styles.containerButton}>
					<Button
						disabled={!this.state.password || this.state.password !== this.state.confirmPassword}
						style={styles.button}
						color="#5661B3"
						title="Register"
						onPress={() => {
							this.register()
						}}
					/>
				</View>
				<View
					style={styles.containerButton}>
					<Button
						style={styles.button}
						color="#5661B3"
						title="Login"
						onPress={() => {
							this.props.changeRegistrationStatus(true);
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

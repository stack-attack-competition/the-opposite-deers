import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from "react-native";

export default class Login extends Component {

	BASE_URL = 'https://stack-attack-bed.herokuapp.com';

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
		this.navigation = props.navigation;
	}

	login = () => {
		const authData = {
			email: this.state.email,
			password: this.state.password
		};

		fetch(`${this.BASE_URL}/auth/login`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(authData),
		})
		.then(data => {
			return data.json();
		})
		.then((responseObject) => {
			//if (responseObject['error'] === undefined) {
				this.props.onLogin(true);
			//} else {
				//console.error(responseObject);
			//}
		})
		.catch(error => {
			console.error(error);
		})
	};

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
					placeholder="Password"
					textContentType={'password'}
					secureTextEntry={true}
					onChangeText={(password) => this.setState({password: password})}
					value={this.state.password}
				/>
				<View style={styles.containerButton}>
					<Button
						style={styles.button}
						color="#5661B3"
						title="Login"
						onPress={() => {
							this.login()
						}}/>
				</View>
				<View style={styles.containerButton}>
					<Button
						style={styles.button}
						color="#5661B3"
						title="Register"
						onPress={() => {
							this.props.changeRegistrationStatus(false);
						}}
					/>
				</View>
			</View>
		)
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

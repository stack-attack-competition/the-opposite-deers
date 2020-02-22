import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button} from "react-native";

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

	login() {
		const authData = {
			email: this.state.email,
			password: this.state.password
		};

		fetch(`${this.BASE_URL}/auth/login`, {
			method: 'POST',
			headers: {
				// Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(authData),
		})
		.then(data => {
			return data.json();
		})
		.then((user) => {
			console.log(user);
			this.navigation.navigate('ChallengeList', {isAuthenticated: true})
		})
		.catch(error => {
			console.log(error);
		})
	}

	render() {
		return (
			<View>
				<View>
					<TextInput
						style={{height: 40, width: 200}}
						placeholder="Email"
						textContentType={'emailAddress'}
						onChangeText={(email) => this.setState({email: email})}
						value={this.state.email}
					/>
					<TextInput
						style={{height: 40, width: 200}}
						placeholder="Password"
						textContentType={'password'}
						secureTextEntry={true}
						onChangeText={(password) => this.setState({password: password})}
						value={this.state.password}
					/>
					<Button
						title="Login"
						onPress={() => {
							this.login()
						}}
					/>
				</View>
			</View>
		)
	}
}


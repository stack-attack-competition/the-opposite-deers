import React, {Component} from 'react';
import {Button, TextInput, View} from "react-native";

export default class Registration extends Component {

	BASE_URL = 'https://stack-attack-bed.herokuapp.com';

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
		this.navigation = props.navigation;
	}

	register() {
		const newUser = {
			"email": 'anyad',
			"password": 'anyadat',
			"firstName": "Tom",
			"lastName": "Kap",
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
			console.log(user);
			this.navigation.navigate('Login')

		})
		.catch(error => {
			console.log(error);
		})
	}

	render() {
		return (
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
					title="Register"
					onPress={() => {
						this.register()
					}}
				/>
			</View>
		);
	}
}

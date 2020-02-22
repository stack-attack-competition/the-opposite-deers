import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Alert} from "react-native";

export default class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
		this.navigation = props.navigation
	}

	render() {
		return (
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<View>
					<TextInput
						style={{height: 40, width: 200}}
						placeholder="Email"
						textContentType={'emailAddress'}
						onChangeText={(email) => this.setState({email})}
						value={this.state.text}
					/>
					<TextInput
						style={{height: 40, width: 200}}
						placeholder="Password"
						textContentType={'password'}
						secureTextEntry={true}
						onChangeText={(password) => this.setState({password})}
						value={this.state.text}
					/>
					<Button
						title="Login"
						onPress={() => {
							this.navigation.navigate('Home')
						}}
					/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	text: {
		color: '#fff'
	}
});

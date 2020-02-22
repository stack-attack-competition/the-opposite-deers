import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Registration from "./Registration";
import Login from "./Login";

const Stack = createStackNavigator();

export default class Home extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen
							name="Registration"
							component={Registration}
						/>
						<Stack.Screen
							name="Login"
							component={Login}
						/>
					</Stack.Navigator>
				</NavigationContainer>
		)
	}
}

const styles = StyleSheet.create({
	text: {
		color: '#000'
	}
});

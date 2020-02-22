import React, {Component} from 'react';
import Registration from "./Registration";
import Login from "./Login";

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ChallengeList from "./ChallengeList";

const Stack = createStackNavigator();

export default class Auth extends Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.apiService = props.apiService;
	}

	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Login"
						options={{apiService: this.apiService}}
						component={Login}
					/>
					<Stack.Screen
						name="Registration"
						options={{apiService: this.apiService}}
						component={Registration}
					/>
					{/*<Stack.Screen*/}
					{/*	name="ChallengeList"*/}
					{/*	options={{apiService: this.apiService}}*/}
					{/*	component={ChallengeList}*/}
					{/*/>*/}
				</Stack.Navigator>
			</NavigationContainer>
		)
	}
}


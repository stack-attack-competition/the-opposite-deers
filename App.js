import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import Login from "./Login";

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ChallengeList from "./ChallengeList";
import Registration from "./Registration";
import NewChallenge from "./NewChallenge";

const Stack = createStackNavigator();

export default class App extends Component {

	state = {
		isAuthenticated: false,
		isRegistered: true
	};

	constructor(prop) {
		super(prop);
	}

	onLogin = (isAuthenticated) => {
		console.log(isAuthenticated);
	  this.setState((previousState) => ({
        isAuthenticated: isAuthenticated
      }));
    };

    changeRegistrationStatus = (isRegistered) => {
      this.setState((previousState) => ({
        isRegistered: isRegistered
      }));
    };

	render = () => {
		let targetComponent;
		if (this.state.isAuthenticated) {
			targetComponent =
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen
							name="ChallengeList"
							component={ChallengeList}
						/>
						<Stack.Screen
							name="NewChallenge"
							component={NewChallenge}
						/>
					</Stack.Navigator>
				</NavigationContainer>

		} else {
		   if (this.state.isRegistered) {
             targetComponent = <Login onLogin={this.onLogin} changeRegistrationStatus={this.changeRegistrationStatus}/>
           } else {
             targetComponent = <Registration onRegister={this.onRegister} changeRegistrationStatus={this.changeRegistrationStatus}/>
           }
        }
		return (targetComponent)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

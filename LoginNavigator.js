import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Registration from "./Registration";
import Login from "./Login";
import ChallengeList from "./ChallengeList";

const Stack = createStackNavigator();

export function LoginNavigator() {
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
						<Stack.Screen
							name="ChallengeList"
							component={ChallengeList}
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

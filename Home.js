import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";

export default class Home extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<Text>Welcome</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	text: {
		color: '#000'
	}
});

import React, { Component } from 'react';
import { View, SafeAreaView, TouchableOpacity, TextInput, AsyncStorage, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class New extends Component {
	static navigationOptions = {
		header: null,
	};

	state = {
		newTweet: '',
	};

	goBack = () => [
		this.props.navigation.pop(),
	];

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity onPress={() => this.goBack()}>
						<Icon name="close" size={24} color="#4bb0ee" />
					</TouchableOpacity>

					<TouchableOpacity onPress={() => 1} style={styles.button}>
						<Text style={styles.buttonText}>Tweetar</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF',
	},

	header: {
		paddingTop: 10,
		paddingHorizontal: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	button: {
		height: 32,
		paddingHorizontal: 20,
		borderRadius: 16,
		backgroundColor: '#4BB0EE',
		justifyContent: 'center',
		alignItems: 'center',
	},

	buttonText: {
		color: '#FFF',
		fontSize: 16,
		fontWeight: 'bold',
	},

	input: {
		margin: 20,
		fontSize: 16,
		color: '#333',
	},
});

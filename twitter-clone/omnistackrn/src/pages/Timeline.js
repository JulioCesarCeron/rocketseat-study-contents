import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../services/api';
import Tweet from '../components/Tweet';

export default class Timeline extends Component {
	static navigationOptions = {
		title: 'Details',
	};

	state = {
		tweets: [],
	};

	async componentDidMount() {
		console.log('TESTE');
		const response = await api.get('tweets');
		console.log('response', response);
		this.setState({
			tweets: response.data,
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('New')}>
					<Icon style={{ marginRight: 20 }} name="add-circle-outline" size={24} color="#4bb0ee" />
				</TouchableOpacity>
				<Text>JORGE</Text>

				<FlatList
					data={this.state.tweets}
					keyExtractor={(tweet) => tweet._id}
					renderItem={({ item }) => <Tweet tweet={item} />}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF',
	},
});

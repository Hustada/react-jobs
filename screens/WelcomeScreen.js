import React, { Component } from 'react';
import { View , Text } from 'react-native';
import Slides from '../components/Slides';

//list of objects where each object is a single page within said page
const SLIDE_DATA = [
	{ text: 'Welcome to JobApp', color: '#03A9F4' },
	{ text: 'Use this to get a job', color: '#009688' },
	{ text: 'Set your location, then swipe away', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
	//if we use an arrow function here we don't need to use 'bind.this' below
	onSlidesComplete = () => {
		this.props.navigation.navigate('auth');
	}

	render() {
		return (
			<Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
		);
	}
}

export default WelcomeScreen;
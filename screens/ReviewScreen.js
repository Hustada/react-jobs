import React, { Component } from 'react';
import { View , Text, Button, Platform } from 'react-native';
// react-native's button doesn't require any styling
// import { Button } from 'react-native-elements';



class ReviewScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
    title: 'Review Jobs',
    headerRight: 
    <Button 
    	title="Settings"
    	onPress={() => { navigation.navigate('settings'); }}
    />,
    //android specific styling
    style: {
    	marginTop: Platform.OS === 'android' ? 24 : 0
    }
  });

	render() {
		return (
			<View>
				<Text>ReviewScreen</Text>
				<Text>ReviewScreen</Text>
				<Text>ReviewScreen</Text>
				<Text>ReviewScreen</Text>
				<Text>ReviewScreen</Text>
				<Text>ReviewScreen</Text>
			</View>
		);
	}
}

export default ReviewScreen;
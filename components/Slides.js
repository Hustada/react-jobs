import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

//get dimensions of device.
const SCREEN_WIDTH = Dimensions.get('window').width;
//find last slide and add button
class Slides extends Component {
	renderLastSlide(index) {
		if(index === this.props.data.length -1) {
			return (
				<Button 
					title="Get Started!"
					raised
					buttonStyle={styles.buttonStyle}
					onPress={this.props.onComplete}
				/>
			);
		}
	}
	//for every object create new view that contains slide text
	renderSlides() {
		return this.props.data.map((slide, index) => {
			return(
				<View key={slide.text} 
					style={[styles.slideStyle, {backgroundColor: slide.color }]}
				>
					<Text style={styles.textStyle}>{slide.text}</Text>
					{this.renderLastSlide(index)}
				</View>
			);
		});
	}
	render() {
		return (
			<ScrollView
				horizontal
				style={{ flex: 1 }}
				pagingEnabled
			>
				{this.renderSlides()}
			</ScrollView>
		);
	}
}

const styles = {
	slideStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: SCREEN_WIDTH
	},
	textStyle: {
		fontSize: 30,
		color: 'white',
		textAlign: 'center'
	},
	buttonStyle: {
		backgroundColor: '#0288D1',
		marginTop: 15
	}
};


export default Slides;
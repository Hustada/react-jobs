import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';

//get dimensions of device.
const SCREEN_WIDTH = Dimensions.get('window').width

class Slides extends Component {
	//for every object create new view that contains slide text
	renderSlides() {
		return this.props.data.map((slide) => {
			return(
				<View key={slide.text} 
					style={[styles.slideStyle, {backgroundColor: slide.color }]}
				>
					<Text style={styles.textStyle}>{slide.text}</Text>
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
		color: 'white'
	}
};


export default Slides;
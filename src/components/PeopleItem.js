import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Styles } from '../themes'

const PeopleItem = ({name, hairColor, skinColor, onPressDetail}) => {
	return (
		<TouchableOpacity 
			onPress={onPressDetail}
			style={Styles.containerItem}>
			<Text style={Styles.textHeadline3}>{name}</Text>
			<View style={Styles.containerRow}>
				<Text style={Styles.textDefaultRegular}>Hair Color</Text>
				<Text style={Styles.textDefaultSemiBold}>{hairColor === 'n/a' ? '-' : hairColor}</Text>
			</View>
			<View style={Styles.containerRow}>
				<Text style={Styles.textDefaultRegular}>Skin Color</Text>
				<Text style={Styles.textDefaultSemiBold}>{skinColor}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default PeopleItem
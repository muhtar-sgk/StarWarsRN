import { View, Text } from 'react-native'
import React from 'react'
import { Styles } from '../themes'

const PeopleItem = ({name, hairColor, skinColor}) => {
	return (
		<View style={Styles.containerItem}>
			<Text style={Styles.textHeadline2}>{name}</Text>
			<View style={Styles.containerRow}>
				<Text style={Styles.textDefaultRegular}>Hair Color</Text>
				<Text style={Styles.textDefaultSemiBold}>{hairColor}</Text>
			</View>
			<View style={Styles.containerRow}>
				<Text style={Styles.textDefaultRegular}>Skin Color</Text>
				<Text style={Styles.textDefaultSemiBold}>{skinColor}</Text>
			</View>
		</View>
	)
}

export default PeopleItem
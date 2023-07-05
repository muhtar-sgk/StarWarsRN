import { View, Text } from 'react-native'
import React from 'react'
import { Styles } from '../themes'

const DataRow = ({title, name}) => {
	return (
		<View style={Styles.containerRow}>
			<Text style={Styles.textDefaultRegular}>{title}</Text>
			<Text style={Styles.textDefaultSemiBold}>{name}</Text>
		</View>
	)
}

export default DataRow
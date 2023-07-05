import { View, Text } from 'react-native'
import React from 'react'
import { Styles } from '../themes'

const CardTitleWhite = ({title}) => {
	return (
		<View style={{alignItems: 'center'}}>
			<Text style={Styles.textHeadline4}>{title}</Text>
		</View>
	)
}

export default CardTitleWhite
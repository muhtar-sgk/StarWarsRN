import { View, Text, Image } from 'react-native'
import React from 'react'
import { Images, Styles } from '../themes'

const Header = ({title}) => {
	return (
		<View style={Styles.containerHeader}>
			<View style={Styles.containerRow}>
				<Text style={[Styles.textHeadline2, {alignSelf: 'center'}]}>{title}</Text>
				<Image
					source={Images.icStarwars}
					style={Styles.imageSmall}
				/>
			</View>
		</View>
	)
}

export default Header
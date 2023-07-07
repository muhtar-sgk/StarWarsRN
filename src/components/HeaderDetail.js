import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Images, Styles } from '../themes'

const HeaderDetail = ({ title, onPressBack }) => {
	return (
		<View style={Styles.containerHeaderDetail}>
			<View style={Styles.containerRow}>
				<View style={Styles.containerRowHeader}>
					<TouchableOpacity onPress={onPressBack}>
						<Image
							source={Images.icBack}
							style={[Styles.imageSmall, { tintColor: 'white' }]}
						/>
					</TouchableOpacity>
					<Text style={[Styles.textHeadline2, { alignSelf: 'center' }]}>{title}</Text>
				</View>
				<Image
					source={Images.icStarwars}
					style={Styles.imageSmall}
				/>
			</View>
		</View>
	)
}

export default HeaderDetail
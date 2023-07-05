import { StyleSheet } from 'react-native'
import Colors from '../themes/Colors'
import Fonts from '../themes/Fonts'

const Styles = StyleSheet.create({
	containerCenter: {
		flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: Colors.bgColor
	},
	textLargeBold: {
		fontSize: 24,
		fontFamily: Fonts.POPPINS_BOLD,
		color: 'black'
	},
	textDefault: {
		fontSize: 14
	},
	textSmall: {
		fontSize: 12
	},
	imageLarge: {
		width: 240,
		height: 240
	}
})

export default Styles
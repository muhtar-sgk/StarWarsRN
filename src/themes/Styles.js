import { StyleSheet } from 'react-native'
import Colors from '../themes/Colors'
import Fonts from '../themes/Fonts'

const Styles = StyleSheet.create({
	/* Container styles */
	containerCenter: {
		flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: Colors.bgColor
	},
	containerItem: {
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0, 
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 5,
		marginHorizontal: 16,
		marginBottom: 8
  },
	containerCommon: {
    flex: 1,
    backgroundColor: Colors.bgColor
  },
	containerRow: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	textHeadline1: {
		fontSize: 24,
		fontFamily: Fonts.POPPINS_BOLD,
		color: 'black'
	},
	textHeadline2: {
		fontSize: 16,
		fontFamily: Fonts.POPPINS_BOLD,
		color: 'black'
	},
	textDefaultRegular: {
		fontSize: 14,
		fontFamily: Fonts.POPPINS_REGULAR,
		color: 'black'
	},
	textDefaultSemiBold: {
		fontSize: 14,
		fontFamily: Fonts.POPPINS_SEMIBOLD,
		color: 'black'
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
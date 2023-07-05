import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import Modal from 'react-native-modal'
import { Colors, Styles } from '../themes'

const ModalLoading = ({ visible }) => {
	return (
		<Modal isVisible={visible}>
			<View style={Styles.containerLoading}>
				<ActivityIndicator size='large' color={Colors.primaryColor} />
			</View>
		</Modal>
	)
}

export default ModalLoading

import React, { useEffect } from 'react'
import { Text, Animated, Image } from 'react-native'
import { Images, Styles } from '../../themes'
import { Gap } from '../../components'

const Splash = ({ navigation }) => {
	const fadeAnim = new Animated.Value(0)

	useEffect(() => {
		Animated.timing(
			fadeAnim,
			{
				toValue: 1,
				duration: 3000,
				useNativeDriver: false
			}
		).start(async () => {
			navigation.reset({ index: 0, routes: [{ name: 'PeopleScreen' }] })
		})
	}, [])

	return (
		<Animated.View
			style={[Styles.containerCenter, { opacity: fadeAnim }]}
		>
			<Image 
				source={Images.icStarwars}
				style={Styles.imageLarge}
			/>
			<Gap height={16}/>
			<Text style={Styles.textHeadline1}>SWAPI</Text>
		</Animated.View>
	)
}

export default Splash

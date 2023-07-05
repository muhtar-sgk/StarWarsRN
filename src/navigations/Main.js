import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SplashScreen from '../screens/splash/SplashScreen'
import PeopleScreen from '../screens/people/PeopleScreen'
import DetailScreen from '../screens/detail/DetailScreen'

const Stack = createNativeStackNavigator()

const Main = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen 
					name='SplashScreen' 
					component={SplashScreen}
					options={{ headerShown: false}}
				/>
				<Stack.Screen 
					name='PeopleScreen' 
					component={PeopleScreen}
					options={{ headerShown: false}}
				/>
				<Stack.Screen 
					name='DetailScreen' 
					component={DetailScreen}
					options={{ headerShown: false}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Main
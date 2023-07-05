import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPeople } from '../../redux/PeopleReducer'
import { Gap, PeopleItem } from '../../components'
import { Styles } from '../../themes'

const PeopleScreen = () => {
	const dispatch = useDispatch()
	const people = useSelector(state => state.peopleReducer?.data?.results)
	console.log('people', people)

	const fetchData = async () => {
		dispatch(getPeople())
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<View style={Styles.containerCommon}>
			<Gap height={16}/>
			<FlatList
				contentContainerStyle={{ flexGrow: 1 }}
				data={people}
				renderItem={({ item }) => (
					<PeopleItem
						name={item.name}
						hairColor={item.hair_color}
						skinColor={item.skin_color}
					/>
				)}
				keyExtractor={item => item.url}
				// ListEmptyComponent={() => <EmptyData
				// 	title='Anda belum menerima notifikasi'
				// 	source={Images.icEmptyNotif}
				// />}
				// refreshControl={
				// 	<RefreshControl refreshing={isLoading} onRefresh={fetchData} />
				// }
			/>
			<Gap height={8}/>
		</View>
	)
}

export default PeopleScreen
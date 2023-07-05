import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPeople } from '../../redux/peopleSlice'
import { Gap, Header, ModalLoading, PeopleItem } from '../../components'
import { Styles } from '../../themes'

const PeopleScreen = ({navigation}) => {
	const dispatch = useDispatch()
	const people = useSelector(state => state.peopleReducer?.data?.results)
	const isLoading = useSelector(state => state.peopleReducer.isLoading)

	const fetchData = async () => {
		dispatch(getPeople())
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<View style={Styles.containerCommon}>
			<ModalLoading
        visible={isLoading}
      />
			<Header title='People'/>
			<Gap height={16}/>
			<FlatList
				contentContainerStyle={{ flexGrow: 1 }}
				data={people}
				renderItem={({ item, index }) => (
					<PeopleItem
						name={item.name}
						hairColor={item.hair_color}
						skinColor={item.skin_color}
						onPressDetail={() => navigation.navigate(
							'DetailScreen',
							{url: item.url}
						)}
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
			{/* <Gap height={8}/> */}
		</View>
	)
}

export default PeopleScreen
import { View, Text, FlatList, ActivityIndicator, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Gap, Header, PeopleItem } from '../../components'
import { Styles } from '../../themes'
import { fetchPeople, selectPeople, selectNextPage, selectLoading, selectError } from '../../redux/peopleSlice';

const PeopleScreen = ({ navigation }) => {
	const dispatch = useDispatch()
	const characters = useSelector(selectPeople)
	const nextPage = useSelector(selectNextPage)
	const loading = useSelector(selectLoading)
	const error = useSelector(selectError)

	useEffect(() => {
		dispatch(fetchPeople('https://swapi.dev/api/people'))
	}, [])

	const loadMoreCharacters = () => {
		if (nextPage) {
			dispatch(fetchPeople(nextPage));
		}
	}

	const renderFooter = () => {
		if (loading) {
			return <ActivityIndicator style={{ marginVertical: 20 }} />
		} else if (error) {
			return <Text>Error: {error}</Text>
		} else {
			return null
		}
	}

	return (
		<>
			<SafeAreaView style={Styles.containerSafeAreaView} />
			<View style={Styles.containerCommon}>
				<Header title='People' />
				<Gap height={16} />
				<FlatList
					contentContainerStyle={{ flexGrow: 1 }}
					data={characters}
					renderItem={({ item }) => (
						<PeopleItem
							name={item.name}
							hairColor={item.hair_color}
							skinColor={item.skin_color}
							onPressDetail={() => navigation.navigate(
								'DetailScreen',
								{ url: item.url }
							)}
						/>
					)}
					keyExtractor={(item, index) => `${item.name}_${index}`}
					ListFooterComponent={renderFooter}
					onEndReached={loadMoreCharacters}
					onEndReachedThreshold={0.5}
					ListEmptyComponent={() => <Text style={Styles.textDefaultRegularWhite}>People data not available</Text>}
				/>
			</View>
		</>
	)
}

export default PeopleScreen
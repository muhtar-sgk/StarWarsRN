import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Styles } from '../../themes'
import { CardTitleBlack, CardTitleWhite, Gap, Header, ModalLoading } from '../../components'
import DataRow from '../../components/DataRow'
import { fetchDetailPeople } from '../../redux/detailPeopleSlice'

const DetailScreen = ({ route }) => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchDetailPeople(route.params.url))
	}, [dispatch, route.params.url])

	const detailPeople = useSelector((state) => state.detailPeopleReducer?.data)
	const loading = useSelector((state) => state.detailPeopleReducer?.loading)

	const renderFilm = () => {
		if (detailPeople?.filmTitles.length === 0) {
			return <Text style={Styles.textDefaultRegularWhite}>Film data not available</Text>
		} else {
			return detailPeople?.filmTitles.map((item, index) => (
				<Text key={index} style={Styles.textDefaultRegularWhite}>{item.payload}</Text>
			))
		}
	}

	const renderVehicle = () => {
		if (detailPeople?.vehicleNames.length === 0) {
			return <Text style={Styles.textDefaultRegularWhite}>Vehicle data not available</Text>
		} else {
			return detailPeople?.vehicleNames.map((item, index) => (
				<Text key={index} style={Styles.textDefaultRegularWhite}>{item.payload}</Text>
			))
		}
	}

	const renderStarship = () => {
		if (detailPeople?.starshipNames.length === 0) {
			return <Text style={Styles.textDefaultRegularWhite}>Starship data not available</Text>
		} else {
			return detailPeople?.starshipNames.map((item, index) => (
				<Text key={index} style={Styles.textDefaultRegularWhite}>{item.payload}</Text>
			))
		}
	}

	const renderSpecies = () => {
		if (detailPeople?.speciesNames.length === 0) {
			return <Text style={Styles.textDefaultRegular}>Species data not available</Text>
		} else {
			return detailPeople?.speciesNames.map((item, index) => (
				<Text key={index} style={Styles.textDefaultRegular}>{item.payload}</Text>
			))
		}
	}

	return (
		<>
			<SafeAreaView style={Styles.containerSafeAreaView} />
			<View style={Styles.containerCommon}>
				<ModalLoading
					visible={loading}
				/>
				<Header title={detailPeople?.name} />
				<ScrollView>
					<Gap height={16} />
					<View style={Styles.containerItem}>
						<CardTitleBlack title='Main Data People' />
						<Gap height={16} />
						<DataRow
							title='Height'
							name={`${detailPeople?.height} cm`}
						/>
						<DataRow
							title='Mass'
							name={`${detailPeople?.mass} kg`}
						/>
						<DataRow
							title='Hair Color'
							name={detailPeople?.hair_color === 'n/a' ? '-' : detailPeople?.hair_color}
						/>
						<DataRow
							title='Skin Color'
							name={detailPeople?.skin_color}
						/>
						<DataRow
							title='Birth Year'
							name={detailPeople?.birth_year}
						/>
						<DataRow
							title='Gender'
							name={detailPeople?.gender === 'n/a' ? '-' : detailPeople?.gender}
						/>
					</View>
					<Gap height={4} />
					<View style={Styles.containerItemSecondaryColor}>
						<CardTitleWhite title='Films' />
						{renderFilm()}
					</View>
					<Gap height={2} />
					<View style={Styles.containerItemAccentColor}>
						<CardTitleWhite title='Vehicles' />
						{renderVehicle()}
					</View>
					<Gap height={2} />
					<View style={Styles.containerItemGreenColor}>
						<CardTitleWhite title='Starships' />
						{renderStarship()}
					</View>
					<Gap height={2} />
					<View style={Styles.containerItem}>
						<CardTitleBlack title='Species' />
						{renderSpecies()}
					</View>
					<Gap height={2} />
				</ScrollView>
			</View>
		</>
	)
}

export default DetailScreen
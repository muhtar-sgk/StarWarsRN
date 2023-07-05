import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchDetailPeople = createAsyncThunk(
  'detailPeople/fetchDetailPeople',
  async (peopleUrl, { dispatch }) => {
    const response = await axios.get(peopleUrl)
    const people = response.data

    const filmTitles = await Promise.all(
      people.films.map((filmUrl) => dispatch(fetchFilmTitle(filmUrl)))
    )

		const vehicleNames = await Promise.all(
      people.vehicles.map((vehicleUrl) => dispatch(fetchVehicleName(vehicleUrl)))
    )

		const starshipNames = await Promise.all(
      people.starships.map((starshipUrl) => dispatch(fetchStarshipName(starshipUrl)))
    )

		const speciesNames = await Promise.all(
      people.species.map((speciesUrl) => dispatch(fetchStarshipName(speciesUrl)))
    )

    people.filmTitles = filmTitles
    people.vehicleNames = vehicleNames
    people.starshipNames = starshipNames
    people.speciesNames = speciesNames

    return people
  }
)

const detailPeopleSlice = createSlice({
  name: 'detailPeople',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetailPeople.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchDetailPeople.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchDetailPeople.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const fetchFilmTitle = createAsyncThunk(
  'detailPeople/fetchFilmTitle',
  async (filmUrl) => {
    const response = await axios.get(filmUrl)
    return response.data.title
  }
)

export const fetchVehicleName = createAsyncThunk(
  'detailPeople/fetchVehicleName',
  async (vehicleUrl) => {
    const response = await axios.get(vehicleUrl)
    return response.data.name
  }
)

export const fetchStarshipName = createAsyncThunk(
  'detailPeople/fetchStarshipName',
  async (starshipUrl) => {
    const response = await axios.get(starshipUrl)
    return response.data.name
  }
)

export const fetchSpeciesName = createAsyncThunk(
  'detailPeople/fetchSpeciesName',
  async (speciesUrl) => {
    const response = await axios.get(speciesUrl)
    return response.data.name
  }
)

export default detailPeopleSlice.reducer

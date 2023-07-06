import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPeople = createAsyncThunk(
  'people/fetchPeople',
  async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
  }
)

const peopleSlice = createSlice({
  name: 'people',
  initialState: {
    data: [],
    nextPage: '',
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeople.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPeople.fulfilled, (state, action) => {
        state.loading = false
        state.data.push(...action.payload.results)
        state.nextPage = action.payload.next
      })
      .addCase(fetchPeople.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const selectPeople = (state) => state.peopleReducer.data
export const selectNextPage = (state) => state.peopleReducer.nextPage
export const selectLoading = (state) => state.peopleReducer.loading
export const selectError = (state) => state.peopleReducer.error

export default peopleSlice.reducer

import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import Networks from '../consts'
import { showMessage } from '../util/ShowMessage'

const initialState = {
  data: {},
  isLoading: false,
  error: ''
}

export const getPeople = () => {
  return dispatch => {
    dispatch(peopleStart())
    axios.get(Networks.BASE_URL + 'people', {
      timeout: 60000
    })
    .then((result) => {
      dispatch(peopleSuccess(result.data))
    })
    .catch(err => {
      if (err.response) {
        const status = err.response.status
        if(status === 500) {
          showMessage('Internal Server Error')
        } else if(status === 401) {
          showMessage('Error Autentikasi')
        } else {
          showMessage('Mohon periksa kembali koneksi internet anda')
        }
      } else if (err.message) {
        showMessage('Mohon periksa kembali koneksi internet Anda')
      } else {
        showMessage('Mohon periksa kembali koneksi internet Anda')
      }
      dispatch(peopleFailure(err))
    })
  }
}

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    peopleStart: state => {
      state.isLoading = true
    },
    peopleSuccess: (state, action) => {
      state.isLoading = false
      state.data = action.payload
    },
    peopleFailure: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export const {peopleStart, peopleSuccess, peopleFailure} = peopleSlice.actions
export default peopleSlice.reducer
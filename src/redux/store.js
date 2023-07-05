import {configureStore} from '@reduxjs/toolkit'
import PeopleReducer from './PeopleReducer'

export const store = configureStore({
  reducer: {
		peopleReducer: PeopleReducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false
	})
})
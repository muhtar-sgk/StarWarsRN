import {configureStore} from '@reduxjs/toolkit'
import peopleReducer from './peopleSlice'
import detailPeopleReducer from './detailPeopleSlice'

export const store = configureStore({
  reducer: {
		peopleReducer: peopleReducer,
		detailPeopleReducer: detailPeopleReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false
	})
})
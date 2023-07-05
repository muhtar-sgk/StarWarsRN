import React from 'react'
import {Provider} from 'react-redux'
import { store } from '../src/redux/store'
import FlashMessage from 'react-native-flash-message'
import Main from '../src/navigations/Main'

const App = () => {
  return (
    <Provider store={store}>
      <Main />
      <FlashMessage position='bottom' hideStatusBar={false} />
    </Provider>
  )
}

export default App
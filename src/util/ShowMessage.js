import { showMessage as showToast } from 'react-native-flash-message'
import {Colors} from '../themes'

export const showMessage = (message, description, type) => {
  showToast({
    message,
    description,
    type: type === 'success' ? 'success' : 'danger',
    backgroundColor: type === 'success' ? Colors.greenColor : Colors.redColor,
    duration: 3000,    
    statusBarHeight: 20
  })
}
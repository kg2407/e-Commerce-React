import { combineReducers } from 'redux'

import userReducer from './user/user.Reducer'
import cartReducer from './cart/cart.reducer'

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
})

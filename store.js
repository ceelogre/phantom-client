import { configureStore, combineReducers } from '@reduxjs/toolkit'
import usersReducer from './src/reducers/index'

const reducer = combineReducers({
  user: usersReducer
})
const Store = configureStore({
  reducer
})

export default Store
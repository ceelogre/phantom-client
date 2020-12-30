import { applyMiddleware, configureStore, combineReducers } from '@reduxjs/toolkit'
import usersReducer from './src/reducers/index'
import ReduxThunk from 'redux-thunk'
import {getUsersAsync} from './src/actions/index'

const reducer = combineReducers({
  user: usersReducer
})
const Store = configureStore({
  reducer
},
  [
  ReduxThunk
  ]
)

Store.dispatch(getUsersAsync)
export default Store
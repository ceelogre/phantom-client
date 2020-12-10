import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './src/reducers/index'

export const store = configureStore({
  usersReducer
})
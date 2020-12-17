import React, { useState} from 'react'
import {render} from 'react-dom'
import Layout from './components/index'
import { Provider } from 'react-redux'
import Store from '../store'

const App = () => {
  return (
    <Provider store={Store}>
      <Layout />
    </Provider>
  )
}

render(<App />, document.getElementById('body-container'))
import React, { useState} from 'react'
import {render} from 'react-dom'
import Layout from './components/index'

const App = () => {
  return (
   <Layout />
  )
}

render(<App />, document.getElementById('body-container'))
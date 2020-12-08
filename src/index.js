import React, { useState} from 'react'
import {render} from 'react-dom'

const App = () => {
  const [state, setState] = useState('Hmm')
  return <button onClick = { () => setState('Taken')}>{state}</button>
}

render(<App />, document.getElementById('body-container'))
import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import '../stylesheets/components/body.scss'

const Body = () => {
  return (
    <Jumbotron className='jumbotron'>
      <h1>Welcome to Phantom</h1>
      <p>Your commute but made a lot easier. Take advantage of our app to track real time bus locations so you don't lose your precious time waiting in line.</p>
      <Button variant='primary'>Get started</Button>
    </Jumbotron>
  )
}

export default Body
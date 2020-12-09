import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../stylesheets/base.scss'

import Header from './header'
import Body from './body'
import Footer from './footer'


const Layout = () => {
  return (
    <Container>
      <Row>
        <Col><Header /></Col>
      </Row>
      <Row>
        <Col><Body /></Col>
      </Row>
      <Row>
        <Col><Footer /></Col>
      </Row>
    </Container>
  )
}

export default Layout
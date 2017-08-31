import React, { Component } from 'react'
import { HomePage } from 'containers'
import { Header } from 'components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`text-align: center;`

class Routes extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Header />
          <Route path="/" component={HomePage} />
        </Container>
      </Router>
    )
  }
}

export default Routes

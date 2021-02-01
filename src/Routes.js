import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Shared/Header'

import Home from './components/Home'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes


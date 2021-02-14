import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Shared Components
import Header from './components/Shared/Header'
import PrivateRoute from "./components/Shared/protectHOC"
import Loader from "./components/Shared/Loader"

// Components
import Home from './components/Home'
import Login from "./components/User/Login"
import Dashboard from './components/Dashboard/Dashboard'
import AddPost from './components/Post/index'

// Redux
import { connect } from 'react-redux'
import { autoSignIn } from './components/Store/actions/authActions'


class Routes extends Component {
  state = {
    loading: true,
  }

  componentDidMount() {
    this.props.dispatch(autoSignIn()).then(() => {
      this.setState({ loading: false })
    })
  }

  app = (auth) => (
    <BrowserRouter>
      <Header auth={auth} />
      <Switch>
        <PrivateRoute path="/add-post">
          <AddPost />
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )

  render() {
    const { auth } = this.props
    return !this.state.loading ? this.app(auth) : <Loader />
  }
}


const mapStateToProps = state => ({ auth: state.auth })

export default connect(mapStateToProps)(Routes)


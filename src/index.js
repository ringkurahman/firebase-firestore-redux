import React from "react"
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import "react-toastify/dist/ReactToastify.css"
import './App.css'
import Routes from "./Routes"

// Redux, React-Redux, Redux-Promise
import { Provider } from 'react-redux'
import ReduxStore from './components/Store/store'


ReactDOM.render(
  <Provider store={ReduxStore()}>
    <Routes />
  </Provider>,
  document.getElementById("root")
)

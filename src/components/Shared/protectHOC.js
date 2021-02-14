import React from "react"
import { Redirect, Route } from "react-router-dom"
import { useSelector } from "react-redux"



const PrivateRoute = ({ children, ...rest }) => {

    const user = useSelector(({ auth }) => auth.user)
    console.log(user)

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect to={{ pathname: "/", state: { from: location } }} />
        )
      }
    />
  )
}

export default PrivateRoute

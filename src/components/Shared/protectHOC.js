import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import Loader from "./Loader"



export default function (ComposedComponent) {

    const AuthenticationCheck = (props) => {
      
        const [isAuth, setIsAuth] = useState(false)
        const user = useSelector(({ auth }) => auth.user)

        useEffect(() => {
        if (!user) {
            // user not auth
            props.history.push("/")
        } else {
            setIsAuth(true)
            props.history.push("/dashboard")
        }
        }, [props, user])

        if (!isAuth) {
        return (
            <Loader />
        )
        } else {
        return <ComposedComponent {...props} />
        }
  }
  return AuthenticationCheck
}

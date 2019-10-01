import React from 'react'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useAuth()

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}

export default PrivateRoute

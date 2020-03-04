import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useLogin } from 'react-admin'

import AuthProvider from '../../providers/authProvider'

const SignIn = props => {
  function onSignIn() {
    AuthProvider.login()
    if (AuthProvider.checkAuth()) {
    }
  }
  useEffect(() => {
    AuthProvider.initOauth()
  })
  return (
    <div>
      <h1>Login</h1>
      <div id="g-signIn" data-onsuccess={`${onSignIn}`} />
    </div>
  )
}

export default connect(undefined, { useLogin })(SignIn)

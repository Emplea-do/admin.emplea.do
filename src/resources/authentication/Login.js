import React from 'react'
import { useLogin } from 'react-admin'
import GoogleLogin from 'react-google-login'
import { MuiThemeProvider } from '@material-ui/core/styles'

const { REACT_APP_GOOGLE_CLIENT_ID } = process.env

export const Login = props => {
  const login = useLogin()
  const onSucessGoogleAuth = r => login(r)
  const onFailureGoogleAuth = e => console.log(e)

  return (
    <MuiThemeProvider theme={props.theme || {}}>
      <GoogleLogin
        clientId={REACT_APP_GOOGLE_CLIENT_ID}
        onSuccess={onSucessGoogleAuth}
        onFailure={onFailureGoogleAuth}
        cookiePolicy={'single_host_origin'}
        buttonText="Login con Google"
      />
    </MuiThemeProvider>
  )
}

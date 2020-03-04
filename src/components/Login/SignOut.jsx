import React from 'react'

import AuthProvider from '../../providers/authProvider'

const SignOut = () => {
  return <button onClick={AuthProvider.logout}>Sign Out</button>
}

export default SignOut

import { useContext } from 'react'

import { AuthContext } from '../context/AuthenticationContext'

export function useAuth() {
  return useContext(AuthContext)
}

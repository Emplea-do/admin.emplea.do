import { propOr, ifElse, equals, compose } from 'ramda'

const requiredParameter = k => {
  throw new Error(`${k} is required`)
}
const setOnLS = (
  k = requiredParameter('key parameter'),
  v = requiredParameter('value parameter')
) => localStorage.setItem(k, v)

/**
 * TODO:
 * - Send Google Token to API for receiven an API A.T
 */
const AuthProvider = {
  login: response => {
    const getToken = propOr('', 'accessToken')
    const getProfile = propOr({}, 'profileObj')

    const token = getToken(response)
    const profile = getProfile(response)

    const hasProps = Boolean(token && profile)

    const setDetails = () => {
      setOnLS('token', getToken(response))
      setOnLS('profile', JSON.stringify(getProfile(response)))
    }

    const onFailure = () => {
      throw new Error('Ups, there was an error with the Authentication')
    }

    const onValid = compose(setDetails)
    const canNavigate = ifElse(equals(true), onValid, onFailure)
    canNavigate(hasProps)

    return Promise.resolve()
  },

  // called when the user clicks on the logout button
  logout: () => {
    localStorage.clear()
    return Promise.resolve()
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.clear()
      return Promise.reject()
    }
    return Promise.resolve()
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem('token') ? Promise.resolve() : Promise.reject()
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
}

export default AuthProvider

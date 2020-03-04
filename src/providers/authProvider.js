/**
 * TODO: Adds Google Auth Strategy
 */

const AuthProvider = {
  login: googleUser => {
    let userToken = googleUser.uc.id_token
    let userSignedIn = window.gapi.auth2.getAuthInstance().isSignedIn.get()
    localStorage.setItem(
      'user',
      JSON.stringify({ token: userToken, signnedIn: userSignedIn })
    )
    return Promise.resolve()
  },
  initOauth: () => {
    const { REACT_APP_GOOGLE_KEY } = process.env
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: REACT_APP_GOOGLE_KEY,
      })
    })
    window.gapi.signin2.render('g-signIn', {
      scope: 'profile email',
      width: 300,
      height: 50,
      longtitle: true,
      theme: 'dark',
      onsuccess: AuthProvider.login,
      onfailure: AuthProvider.checkError,
    })
  },

  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem('user')
    let auth2 = window.gapi.auth2.getAuthInstance()
    auth2.signOut().then(() => console.log('user sign out'))
    return Promise.resolve()
  },
  // called when the API returns an error
  checkError: googleUser => {
    console.log(googleUser)
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem('user') ? Promise.resolve() : Promise.reject()
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
}

export default AuthProvider

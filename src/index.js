import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider } from 'emotion-theming'
import { Global } from '@emotion/core'

import App from './containers/App'
import * as serviceWorker from './serviceWorker'

import { globalCSS, theme } from './styles/'

ReactDOM.render(
  <>
    <Global styles={globalCSS} />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

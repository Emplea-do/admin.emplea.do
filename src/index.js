import React from 'react'
import ReactDOM from 'react-dom'

import App from './containers/App'
import ErrorBoundary from './component/errorboundary/ErrorBoundary'

import './scss/main.scss'

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
)

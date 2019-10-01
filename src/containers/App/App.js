import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Layout from '../../component/layout/Layout'

import Login from '../../pages/Login'
import Home from '../../pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Layout>test</Layout>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      {/* <Route path="/admin" component={Admin} /> */}
    </BrowserRouter>
  )
}

export default App

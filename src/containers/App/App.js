import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Layout from '../../component/layout/Layout'
import Button from '../../component/forms/Button'

function App() {
  const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
      <Layout>test</Layout>
    </BrowserRouter>
  )
}

export default App

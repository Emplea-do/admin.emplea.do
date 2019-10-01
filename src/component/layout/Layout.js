import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Container, Label } from 'reactstrap'

function Layout({ children }) {
  return <Container>{children}</Container>
}

export default Layout

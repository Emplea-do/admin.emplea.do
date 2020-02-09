import React from 'react'
import { Admin } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'

const dataProvider = jsonServerProvider('localhost')

function App() {
  return <Admin dataProvider={dataProvider} />
}

export default App

import React from 'react'
import { Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'

import { JobList } from '../../components/JobsList/JobsList'

const dataProvider = jsonServerProvider(process.env.REACT_APP_API_URL)

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="jobs" list={JobList} />
    </Admin>
  )
}

export default App

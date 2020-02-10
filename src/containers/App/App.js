import React from 'react'
import { Admin, Resource } from 'react-admin'
import WorkIcon from '@material-ui/icons/Work'
import jsonServerProvider from 'ra-data-json-server'

import authProvider from '../../providers/authProvider'

/* Resources -> pages */
import { JobList } from '../../resources/jobs/JobList'

const dataProvider = jsonServerProvider(process.env.REACT_APP_API_URL)

function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource
        icon={WorkIcon}
        options={{ label: 'Trabajos' }}
        name="jobs"
        list={JobList}
      />
    </Admin>
  )
}

export default App

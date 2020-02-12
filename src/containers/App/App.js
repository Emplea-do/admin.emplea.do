import React from 'react'
import { Admin, Resource } from 'react-admin'
import WorkIcon from '@material-ui/icons/Work'
import jsonServerProvider from 'ra-data-json-server'
import { ListGuesser } from 'react-admin'

import authProvider from '../../providers/authProvider'
import empleadoProvider from '../../providers/empleadoProvider'

/* Resources -> pages */
import { JobList } from '../../resources/jobs/JobList'

const dataProvider = jsonServerProvider(process.env.REACT_APP_API_URL)
function App() {
  return (
    <Admin dataProvider={empleadoProvider} authProvider={authProvider}>
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

import React from 'react'
import { Admin, Resource } from 'react-admin'

import WorkIcon from '@material-ui/icons/Work'

import authProvider from '../../providers/authProvider'
import empleadoProvider from '../../providers/empleadoProvider'

import { JobList } from '../../resources/jobs/JobList'
import { JobDetail } from '../../resources/jobs/JobDetail'
import { JobDetailEdit } from '../../resources/jobs/JobDetailEdit'
import { CompaniesList } from '../../resources/companies/CompaniesList'

function App() {
  return (
    <Admin dataProvider={empleadoProvider} authProvider={authProvider}>
      <Resource
        icon={WorkIcon}
        options={{ label: 'Oportunidades' }}
        name="jobs"
        list={JobList}
        show={JobDetail}
        edit={JobDetailEdit}
      />

      <Resource
        icon={WorkIcon}
        options={{ label: 'Compañias' }}
        name="companies"
        list={CompaniesList}
      />
    </Admin>
  )
}

export default App

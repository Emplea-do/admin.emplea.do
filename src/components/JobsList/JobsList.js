import React from 'react'
import { List, Datagrid, TextField, EmailField } from 'react-admin'

export const JobList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="jobTitle" />
      <TextField source="JobLink" />
      <TextField source="jobCompany" />
      <EmailField source="jobLocation" />
      <TextField source="jobDate" />
      <TextField source="jobCategory" />
      <TextField source="jobType" />
    </Datagrid>
  </List>
)

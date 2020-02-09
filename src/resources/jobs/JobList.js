import React from 'react'
import { List, Datagrid, TextField, ChipField, UrlField } from 'react-admin'

export const JobList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField label="Titulo" source="jobTitle" />
      <UrlField label="URL" source="JobLink" />
      <TextField label="Empresa" source="jobCompany" />
      <TextField label="Dirección" source="jobLocation" />
      <TextField label="Fecha" source="jobDate" />
      <ChipField label="Categoría" source="jobCategory" />
      <ChipField label="Tipo" source="jobType" />
    </Datagrid>
  </List>
)

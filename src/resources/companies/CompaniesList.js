import React from 'react'
import { List, Datagrid, TextField, UrlField } from 'react-admin'

export const CompaniesList = props => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField label="Nombre" source="name" />
      <UrlField label="Sitio" source="url" />
    </Datagrid>
  </List>
)

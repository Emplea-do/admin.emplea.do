import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  DateField,
  RichTextField,
} from 'react-admin'

export const JobList = props => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField label="Titulo" source="title" />
      <RichTextField label="Descripcion" source="description" />
      <TextField label="Empresa" source="companyName" />
      <DateField label="Fecha" source="created" />
      <BooleanField label="¿Aprobado?" source="approved" />
      <BooleanField label="¿Es remoto?" source="isRemote" />
    </Datagrid>
  </List>
)

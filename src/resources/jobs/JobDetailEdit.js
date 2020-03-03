import React from 'react'
import { required, Edit, SimpleForm, TextInput, DateInput } from 'react-admin'
import RichTextInput from 'ra-input-rich-text'

/**
 * TODOS
 * - Styles
 * - Adds more fields
 * - API returns 500 when making a PUT request to resource/{id}
 */
export const JobDetailEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="title" validate={required()} />
      <TextInput source="link" />
      <RichTextInput source="description" validate={required()} />
      <DateInput disabled label="Fecha de publicación" source="created" />
    </SimpleForm>
  </Edit>
)

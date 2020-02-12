import React from 'react'
import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  RichTextField,
} from 'react-admin'

/**
 * TODOS
 * - Styles
 * - Adds more fields
 * - API returns 500 when making a GET request to resource/{id}
 */
export const JobDetail = props => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="title" />
        <TextField source="link" />
        <RichTextField source="description" />
        <DateField label="Fecha de publicación" source="created_at" />
      </SimpleShowLayout>
    </Show>
  )
}

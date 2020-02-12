import React from 'react'
import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  RichTextField,
} from 'react-admin'

export const JobDetail = props => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="title" />
        <TextField source="link" />
        <RichTextField source="description" />
        <DateField label="Publication date" source="created_at" />
      </SimpleShowLayout>
    </Show>
  )
}

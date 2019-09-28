import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import React from 'react'

import Button from './Button'

storiesOf('Button', module).add('default', () => (
  <Button onClick={action('clicked')}>Some Button</Button>
))

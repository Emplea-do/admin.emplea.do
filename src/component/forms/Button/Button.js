import React from 'react'

import styled from '@emotion/styled'

const Button = ({ type, ...props }) => (
  <BaeseButton type={type || 'button'} {...props} />
)

const BaeseButton = styled('button')(props => ({
  appearance: 'none',
  border: 0,
  padding: 0,
  margin: 0,
  display: 'block',
  outline: 0,

  color: props.theme.colors.primary,
}))

export default Button

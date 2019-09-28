import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Global } from '@emotion/core'
import { render } from '@testing-library/react'

import { globalCSS, theme } from '../styles'

export const renderWithApp = (ui, options) =>
  render(
    <>
      <Global styles={globalCSS} />
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </>
  )

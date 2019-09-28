import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Global } from '@emotion/core'
import { configure, addDecorator } from '@storybook/react'
import requireContext from 'require-context.macro'

import { theme, globalCSS } from '../src/styles'

// automatically import all files ending in *.stories.js

const withTheme = cb => (
  <>
    <Global styles={globalCSS} />
    <ThemeProvider theme={theme}>{cb()}</ThemeProvider>
  </>
)

addDecorator(withTheme)
configure(requireContext('../src', true, /\.stories\.js$/), module)

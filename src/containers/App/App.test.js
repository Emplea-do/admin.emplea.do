import React from 'react'
import { fireEvent } from '@testing-library/react'

import { renderWithApp } from '../../utils/tests'

import App from './App'

describe('containers/App', () => {
  test('works correctly', () => {
    const { getByText } = renderWithApp(<App />)
    const sampleTest = getByText(/test/gi)
    expect(sampleTest).toHaveTextContent('test')
  })
})

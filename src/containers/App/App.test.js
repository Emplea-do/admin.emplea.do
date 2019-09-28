import React from 'react'
import { fireEvent } from '@testing-library/react'

import { renderWithApp } from '../../utils/tests'

import App from './App'

describe('containers/App', () => {
  test('works correctly', () => {
    const { getByText, getByTestId } = renderWithApp(<App />)
    const button = getByText(/add/gi)
    const countLabel = getByTestId(/counter/gi)
    expect(countLabel).toHaveTextContent('0')
    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)
    expect(countLabel).toHaveTextContent('3')
  })
})

import App from './App'

describe('containers/App', () => {
  test('works correctly', () => {
    expect(App).toMatchSnapshot()
  })
})

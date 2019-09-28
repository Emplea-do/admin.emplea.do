import theme from '../theme'

describe('theme', () => {
  test('application theme has no changes', () => {
    expect(theme).toMatchSnapshot()
  })
})

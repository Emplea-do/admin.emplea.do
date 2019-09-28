import globalCSS from '../global'

describe('globalCSS', () => {
  test('global styles has no changes', () => {
    expect(globalCSS.styles).toMatchSnapshot()
  })
})

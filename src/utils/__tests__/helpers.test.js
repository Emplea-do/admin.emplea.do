import { tap } from '../helpers'

describe('helpers', () => {
  describe('tap', () => {
    let ogConsoleLog
    beforeEach(() => {
      ogConsoleLog = console.log
      console.log = jest.fn()
    })
    afterEach(() => {
      console.log = ogConsoleLog
    })
    test('it log out the passed value and return the same value', () => {
      const returned = tap(4)
      expect(console.log).toHaveBeenCalledTimes(1)
      expect(console.log).toHaveBeenCalledWith(4)
      expect(returned).toBe(4)
    })
  })
})

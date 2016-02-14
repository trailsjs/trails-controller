'use strict'

const assert = require('assert')
const Controller = require('../')

describe('Trails Controller', () => {
  class FooController extends Controller {
    testHandler () {
    }
  }

  describe('#constructor', () => {
    it('.app should be accessible but not enumerable', () => {
      const foo = new FooController(1)
      const keys = Object.keys(foo)

      assert.equal(foo.app, 1)
      assert.equal(keys.indexOf('app'), -1)
    })
  })

  describe('#get id', () => {
    it('should return the id', () => {
      const foo = new FooController()
      assert.equal(foo.id, 'foo')
    })
  })
})


import { test } from 'node:test'
import assert from 'node:assert/strict'
import keys from '../../src/object/keys.js'

test('keys -- Basic usage', () => {
  const obj = { a: 1, b: 2, c: 3, d: { x: 100, y: 200 } }
  assert.deepEqual(keys(
    obj
  ), ['a', 'b', 'c', 'd'])
})

test('keys -- Non-object values', () => {
  assert.deepEqual(keys(null), [])
  assert.deepEqual(keys(undefined), [])
  assert.deepEqual(keys(55), [])
  assert.deepEqual(keys('foo'), [])
  assert.deepEqual(keys(true), [])
  assert.deepEqual(keys(false), [])
  assert.deepEqual(keys(NaN), [])
  assert.deepEqual(keys(Infinity), [])
  assert.deepEqual(keys([]), [])
})

test('keys -- Works with hasOwnProperty override', () => {
  assert.deepEqual(keys({
    hasOwnProperty: false
  }), ['hasOwnProperty'])
})

test('keys -- Should not pick up prototypes', () => {
  function C () {
    this.a = 100
    this.b = 200
  }
  C.prototype.x = function () { return 'x' }
  C.prototype.y = 'y'
  const cobj = new C()

  assert.deepEqual(keys(cobj), ['a', 'b'])
})

test('keys -- Object with no own properties', () => {
  const obj = Object.create({ a: 1 })
  assert.deepEqual(keys(obj), [])
})

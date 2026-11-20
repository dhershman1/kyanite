import { test } from 'node:test'
import assert from 'node:assert/strict'
import keys from '../../src/object/keys.js'

// Mock Object.keys to test the fallback logic
const originalObjectKeys = Object.keys

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

test('keys -- Fallback logic when Object.keys is not available', () => {
  Object.keys = undefined

  const obj = { a: 1, b: 2, c: 3 }
  assert.deepEqual(keys(obj), ['a', 'b', 'c'])

  Object.keys = originalObjectKeys
})

test('keys -- Fallback logic with no own properties', () => {
  Object.keys = undefined

  const obj = Object.create({ a: 1 })
  assert.deepEqual(keys(obj), [])

  Object.keys = originalObjectKeys
})

test('keys -- Test NaN not equal to NaN', () => {
  Object.keys = undefined

  const obj = NaN
  assert.deepEqual(keys(obj), [])

  Object.keys = originalObjectKeys
})

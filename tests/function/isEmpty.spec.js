import isEmpty from '../../src/function/isEmpty.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('isEmpty -- empty Handles String Values', () => {
  assert.ok(isEmpty(''), 'Returns true for an empty string')
  assert.ok(!isEmpty(' '), 'Returns false for string with only whitespace')
  assert.ok(!isEmpty('hi'), 'Returns false for string with content')
})

test('isEmpty -- empty Handles array values', () => {
  assert.ok(isEmpty([]), 'Returns true for empty array')
  assert.ok(!isEmpty([[]]), 'Returns false when array has another empty array inside')
  assert.ok(!isEmpty(['']), 'Returns false if array has empty string inside')
})

test('isEmpty -- empty Handles object values', () => {
  const a = 'thing'

  assert.ok(isEmpty({}), 'Returns true for empty object')
  assert.ok(!isEmpty({ x: 0 }), 'Returns false when object contains property inside')
  assert.ok(!isEmpty({ [a]: 'test' }), 'Returns false for dynamically created objects')
})

test('isEmpty -- empty Handles nil values', () => {
  assert.ok(isEmpty(undefined), 'Returns true for undefined')
  assert.ok(isEmpty(null), 'Returns true for null')
})

test('isEmpty -- Handles Maps and Sets', () => {
  assert.deepEqual(isEmpty(new Map()), true)
  assert.deepEqual(isEmpty(new Set()), true)
  assert.deepEqual(isEmpty(new Map([['a', 1]])), false)
  assert.deepEqual(isEmpty(new Set([1, 2])), false)
})

test('isEmpty -- Works with undefined and null', () => {
  assert.deepEqual(isEmpty(undefined), true)
  assert.deepEqual(isEmpty(null), true)
})

test('isEmpty -- Throws on unsupported types', () => {
  const unsupported = { message: /^Unsupported type: / }

  assert.throws(() => isEmpty(10), { name: 'TypeError', message: 'Unsupported type: Number' })
  assert.throws(() => isEmpty(0), unsupported)
  assert.throws(() => isEmpty(NaN), unsupported)
  assert.throws(() => isEmpty(false), { name: 'TypeError', message: 'Unsupported type: Boolean' })
  assert.throws(() => isEmpty(true), unsupported)
  assert.throws(() => isEmpty(() => {}), unsupported)
})

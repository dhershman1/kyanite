import filter from '../../src/array/filter.js'
import identity from '../../src/function/identity.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('identity -- Returns value given to it', () => {
  assert.equal(identity(10), 10)
})

test('identity -- Handles being used as a function callback', () => {
  assert.deepEqual(filter(identity, [0, 'cool', null, 1]), ['cool', 1])
})

test('identity -- Returns with ability to access as argument type', () => {
  const results = identity(10)

  assert.ok(results)
  assert.equal(typeof results.constructor, 'function')
})

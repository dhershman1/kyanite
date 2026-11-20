import prepend from '../../src/array/prepend.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('prepend -- Returns array with added element at start', () => {
  assert.deepEqual(prepend('testing', ['is', 'cool']), ['testing', 'is', 'cool'])
})

test('prepend -- Works with empty arrays', () => {
  assert.deepEqual(prepend(1, []), [1])
})

test('prepend -- Is curried', () => {
  const pender = prepend('testing')

  assert.equal(typeof pender, 'function')
  assert.deepEqual(pender(['is', 'cool']), ['testing', 'is', 'cool'])
})

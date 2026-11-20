import takeLast from '../../src/array/takeLast.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('takeLast -- Handles taking values from an array', () => {
  const results = takeLast(3, [1, 2, 3, 4, 5])

  assert.deepEqual(results, [3, 4, 5])
})

test('takeLast -- Handles values if the number is bigger than the length', () => {
  const results = takeLast(7, [1, 2, 3, 4, 5])

  assert.deepEqual(results, [1, 2, 3, 4, 5])
})

test('takeLast -- Handles taking values from a string', () => {
  const results = takeLast(3, '12345')

  assert.deepEqual(results, '345')
})

test('takeLast -- Handles empty arrays passed in', () => {
  const results = takeLast(3, [])

  assert.deepEqual(results, [])
})

test('takeLast -- Handles being passed -1', () => {
  const results = takeLast(-1, [1, 2, 3, 4, 5])

  assert.deepEqual(results, [1, 2, 3, 4, 5])
})

test('takeLast -- Is curried', () => {
  const ta = takeLast(3)

  assert.deepEqual(ta([1, 2, 3, 4, 5]), [3, 4, 5], 'curried result returned [3, 4, 5]')
  assert.deepEqual(ta([]), [], 'curried result returned an empty array')
})

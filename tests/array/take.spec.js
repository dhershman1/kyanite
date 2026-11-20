import take from '../../src/array/take.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('take -- Handles taking values from an array', () => {
  const results = take(3, [1, 2, 3, 4, 5])

  assert.deepEqual(results, [1, 2, 3])
})

test('take -- Handles empty arrays passed in', () => {
  const results = take(3, [])

  assert.deepEqual(results, [])
})

test('take -- Is curried', () => {
  const ta = take(3)

  assert.deepEqual(ta([1, 2, 3, 4, 5]), [1, 2, 3], 'curried result returned [1, 2, 3]')
  assert.deepEqual(ta([]), [], 'curried result returned an empty array')
})

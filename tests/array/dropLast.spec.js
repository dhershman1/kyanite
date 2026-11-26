import dropLast from '../../src/array/dropLast.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('dropLast -- Handles dropping values', () => {
  const results = dropLast(3, [1, 2, 3, 4, 5])

  assert.deepEqual(results, [1, 2])
})

test('dropLast -- Handles dropping values when number is larger than length', () => {
  const results = dropLast(6, [1, 2, 3, 4, 5])

  assert.deepEqual(results, [])
})

test('dropLast -- Handles invalid data sets', () => {
  const results = dropLast(3, [])

  assert.deepEqual(results, [])
})

test('dropLast -- Is curried', () => {
  const d = dropLast(3)

  assert.deepEqual(d([1, 2, 3, 4, 5]), [1, 2])
})

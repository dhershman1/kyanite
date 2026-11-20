import drop from '../../src/array/drop.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('drop -- Handles dropping values', () => {
  const results = drop(3, [1, 2, 3, 4, 5])

  assert.deepEqual(results, [4, 5])
})

test('drop -- Handles dropping values when number is larger than length', () => {
  const results = drop(6, [1, 2, 3, 4, 5])

  assert.deepEqual(results, [])
})

test('drop -- Handles invalid data sets', () => {
  const results = drop(3, [])

  assert.deepEqual(results, [])
})

test('drop -- Handles negative index', () => {
  const results = drop(-1, [1, 2, 3, 4, 5])

  assert.deepEqual(results, [1, 2, 3, 4, 5])
})

test('drop -- Is curried', () => {
  const d = drop(3)

  assert.deepEqual(d([1, 2, 3, 4, 5]), [4, 5])
})

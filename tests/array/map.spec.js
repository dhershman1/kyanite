import map from '../../src/array/map.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

const dbl = n => n * 2

test('map -- Basic functionality on Arrays', () => {
  assert.deepEqual(map(dbl, []), [])
  assert.deepEqual(map(dbl, [1, 2, 3]), [2, 4, 6])
})

test('map -- Test is Curried', () => {
  const dbler = map(dbl)

  assert.deepEqual(dbler([1, 2, 3, 4]), [2, 4, 6, 8])
})

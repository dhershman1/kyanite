import map from '../../src/array/map.js'
import into from '../../src/function/into.js'
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

test('map -- Works as a transducer', () => {
  assert.deepEqual(into([], [map(n => n * 2)], [1, 2, 3]), [2, 4, 6])
  assert.deepEqual(into([], map(n => n * 2), [1, 2, 3]), [2, 4, 6])
})

test('map -- Still maps lists after being used as a transducer', () => {
  const dbl = map(n => n * 2)

  into([], [dbl], [1])
  assert.deepEqual(dbl([1, 2]), [2, 4])
})

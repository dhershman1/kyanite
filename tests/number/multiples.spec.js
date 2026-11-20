import { test } from 'node:test'
import assert from 'node:assert/strict'
import multiples from '../../src/number/multiples.js'

test('multiples -- Basic math', () => {
  assert.deepEqual(multiples(100, 6), [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96])
  assert.deepEqual(multiples(100, 5), [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100])
  assert.deepEqual(multiples(0, 4), [])
})

test('multiples -- is curried', () => {
  const fn = multiples(100)

  assert.deepEqual(fn(6), [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96])
  assert.deepEqual(fn(5), [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100])
})

test('multiples -- larger limits', () => {
  const result = multiples(10000, 10)
  const res2 = multiples(10000000, 10)

  assert.ok(result)
  assert.deepEqual(result.length, 1001)
  assert.deepEqual(result[result.length - 1], 10000)
  assert.deepEqual(res2.length, 1000001)
  assert.deepEqual(res2[res2.length - 1], 10000000)
})

import takeWhile from '../../src/array/takeWhile.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('takeWhile -- Basic usage', () => {
  assert.deepEqual(takeWhile(x => x < 4, [1, 2, 3, 4, 5, 6]), [1, 2, 3])
  assert.deepEqual(takeWhile(x => x % 2 !== 0, [1, 3, 5]), [1, 3, 5])
  assert.deepEqual(takeWhile(x => x === 2, [0, 1, 9]), [])
})

test('takeWhile -- Is curried', () => {
  const fn = takeWhile(x => x < 4)

  assert.deepEqual(fn([1, 2, 3, 4, 5]), [1, 2, 3])
  assert.deepEqual(fn([3, 4, 5]), [3])
})

test('takeWhile -- Returns a copy when every value passes', () => {
  const list = [1, 3, 5]
  const results = takeWhile(x => x % 2 !== 0, list)

  assert.deepEqual(results, list)
  assert.notEqual(results, list)
})

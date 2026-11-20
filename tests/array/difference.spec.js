import difference from '../../src/array/difference.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('difference -- Returns the difference in arrays', () => {
  assert.deepEqual(difference([[1, 2, 3], [1]]), [2, 3])
  assert.deepEqual(difference([[1], [1, 2, 3]]), [2, 3])
  assert.deepEqual(difference([['foo', 'bar', 'baz', 'oops', 'charlie'], ['oops', 'baz', 'bobby']]), ['foo', 'bar', 'charlie', 'bobby'])
  assert.deepEqual(difference([[1, 2, 3], [4, 5, 6]]), [1, 2, 3, 4, 5, 6])
})

test('difference -- More than two arrays', () => {
  assert.deepEqual(difference([[1], [1, 2, 3], [2, 4]]), [3, 4])
})

test('difference -- Complex tests', () => {
  assert.deepEqual(difference([[1, 4, 13, 'test'], [1, 4, 13]]), ['test'])
  assert.deepEqual(difference([[1, 4, 13, 'test'], ['test', 1, 3]]), [4, 13, 3])
  assert.deepEqual(difference([[1, 4, 13, 'test'], [1, 1, 4, 4, 3, 3]]), [13, 'test', 3])
})

test('difference -- Handles dupes in both arrays', () => {
  assert.deepEqual(difference([[1, 2, 3, 3, 4, 2], [1, 1, 2, 3, 3]]), [4])
  assert.deepEqual(difference([[1, 2, 3, 3, 4, 2], [2, 2, 22, 44, 1]]), [3, 4, 22, 44])
})

test('difference -- Handles odd edge cases', () => {
  assert.deepEqual(difference([[NaN], [NaN]]).length, 0)
})

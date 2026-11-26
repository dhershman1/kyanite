import intersection from '../../src/array/intersection.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('intersection -- Returns an array with items from both arrays', () => {
  assert.deepEqual(intersection([1, 2, 3, 4], [3, 4, 5, 6]), [3, 4])
  assert.deepEqual(intersection(['foo', 'bar', 'baz', 'oops', 'charlie'], ['oops', 'baz', 'bobby']), ['baz', 'oops'])
  assert.deepEqual(intersection([1, 2, 3], [4, 5, 6]), [])
})

test('intersection -- Its curried', () => {
  const inter = intersection([1, 2, 3, 4])

  assert.deepEqual(inter([3, 4, 5, 6]), [3, 4])
  assert.deepEqual(inter([11, 44, 3]), [3])
  assert.deepEqual(inter([3, 3, 4]), [3, 4])
})

test('intersection -- Handles dupes in both arrays', () => {
  const fn = intersection([1, 2, 2, 3, 4, 4])
  const fn2 = intersection(['foo', 'bar', 'bar', 'baz', 'boat', 'boat'])

  assert.deepEqual(fn([4, 4, 2, 3, 3]), [2, 3, 4])
  assert.deepEqual(fn2(['baz', 'baz', 'bar', 'bar', 'foo']), ['foo', 'bar', 'baz'])
})

test('intersection -- Compares with SameValueZero instead of string keys', () => {
  const a = { a: 1 }

  assert.deepEqual(intersection([1, 2, a], ['1', 2, { a: 1 }, a]), [2, a])
  assert.deepEqual(intersection([3, 1], [1, 3]), [3, 1], 'Keeps the order of the first list')
})

test('intersection -- Works with any iterable', () => {
  assert.deepEqual(intersection('abc', 'bcd'), ['b', 'c'])
  assert.deepEqual(intersection(new Set([1, 2, 3]), new Set([3, 2])), [2, 3])
})

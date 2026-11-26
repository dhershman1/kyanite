import { test } from 'node:test'
import assert from 'node:assert/strict'
import uniq from '../../src/array/uniq.js'
import into from '../../src/function/into.js'
import map from '../../src/array/map.js'

test('uniq -- Removes duplicates', () => {
  assert.deepEqual(uniq([1, 2, 2, 3, 3, 4, 5]), [1, 2, 3, 4, 5])
})

test('uniq -- Removes duplicate strings', () => {
  assert.deepEqual(uniq(['test', 'test', 'thing', 'other', 'other']), ['test', 'thing', 'other'])
})

test('uniq -- Keeps the original order of numbers', () => {
  assert.deepEqual(uniq([3, 1, 2, 1, 3]), [3, 1, 2])
})

test('uniq -- Does not treat numbers and numeric strings as the same', () => {
  assert.deepEqual(uniq([1, '1', 1]), [1, '1'])
})

test('uniq -- Compares objects by reference', () => {
  const a = { a: 1 }
  const b = { b: 2 }

  assert.deepEqual(uniq([a, b, a]), [a, b])
})

test('uniq -- Handles __proto__ and NaN', () => {
  assert.deepEqual(uniq(['__proto__', 'a', '__proto__']), ['__proto__', 'a'])
  assert.deepEqual(uniq([NaN, NaN]), [NaN])
})

test('uniq -- Works as a transducer when passed as is', () => {
  assert.deepEqual(into([], [uniq], [1, 2, 1, 3, 2]), [1, 2, 3])
  assert.deepEqual(into([], [map(x => x % 3), uniq], [1, 2, 3, 4, 5, 6]), [1, 2, 0])
})

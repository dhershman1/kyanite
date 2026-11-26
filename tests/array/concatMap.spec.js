import concatMap from '../../src/array/concatMap.js'
import into from '../../src/function/into.js'
import take from '../../src/array/take.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('concatMap -- Apples function to values and merges arrays', () => {
  const result = concatMap(x => [x, x], [1, 2, 3])

  assert.deepEqual(result, [1, 1, 2, 2, 3, 3])
})

test('concatMap -- Shrinks the array', () => {
  const results = concatMap(x => x, [[1, 2], [3, 4], [5, 6]])

  assert.deepEqual(results, [1, 2, 3, 4, 5, 6])
})

test('concatMap -- Is properly curried', () => {
  const con = concatMap(x => [x, x])

  assert.deepEqual(con([1, 2, 3]), [1, 1, 2, 2, 3, 3])
})

test('concatMap -- Works as a transducer', () => {
  assert.deepEqual(into([], [concatMap(x => [x, x])], [1, 2, 3]), [1, 1, 2, 2, 3, 3])
  assert.deepEqual(into([], [concatMap(x => x)], [[1], 2, [[3]], []]), [1, 2, [3]], 'Only arrays are joined in, one level deep')
})

test('concatMap -- As a transducer, a later step can stop partway through an array', () => {
  let calls = 0
  const result = into([], [concatMap(x => {
    calls++
    return [x, x, x]
  }), take(4)], [1, 2, 3])

  assert.deepEqual(result, [1, 1, 1, 2])
  assert.equal(calls, 2, 'The third value is never looked at')
})

test('concatMap -- Works with any iterable', () => {
  assert.deepEqual(concatMap(x => [x, x], new Set([1, 2])), [1, 1, 2, 2])
})

test('concatMap -- Only arrays are joined in, other values are added as is', () => {
  assert.deepEqual(concatMap(x => x, [[1], 2, [[3]], []]), [1, 2, [3]])
})

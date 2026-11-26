import filter from '../../src/array/filter.js'
import into from '../../src/function/into.js'
import map from '../../src/array/map.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('filter -- Basic functionality', () => {
  const isEven = n => n % 2 === 0

  assert.deepEqual(filter(isEven, [1, 2, 3, 4]), [2, 4])
})

test('filter -- Returns an empty array if no element matches', () => {
  assert.deepEqual(filter(x => x > 100, [1, 3, 4, 56, 90]), [])
})

test('filter -- Works as a transducer', () => {
  assert.deepEqual(into([], [filter(n => n % 2 === 0)], [1, 2, 3, 4]), [2, 4])
  assert.deepEqual(into([], [filter(() => false)], [1, 2]), [])
})

test('filter -- Values it drops never reach the next step', () => {
  const seen = []
  const record = map(x => {
    seen.push(x)
    return x
  })

  into([], [filter(n => n > 2), record], [1, 2, 3, 4])
  assert.deepEqual(seen, [3, 4])
})

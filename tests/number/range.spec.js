import range from '../../src/number/range.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('range -- Create basic range array', () => {
  const results = range(1, 5)

  assert.ok(results)
  assert.deepEqual(results, [1, 2, 3, 4])
  assert.deepEqual(range(0, 0), [])
})

test('range -- Creates range from zero to five', () => {
  const results = range(0, 5)

  assert.ok(results)
  assert.deepEqual(results, [0, 1, 2, 3, 4])
})

test('range -- Handles string types', () => {
  assert.deepEqual(range('1', 4), [1, 2, 3])
  assert.deepEqual(range(1, '4'), [1, 2, 3])
  assert.deepEqual(range('1', '4'), [1, 2, 3])
})

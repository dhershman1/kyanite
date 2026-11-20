import { test } from 'node:test'
import assert from 'node:assert/strict'
import uniq from '../../src/array/uniq.js'

test('uniq -- Removes duplicates', () => {
  assert.deepEqual(uniq([1, 2, 2, 3, 3, 4, 5]), [1, 2, 3, 4, 5])
})

test('uniq -- Removes duplicate strings', () => {
  assert.deepEqual(uniq(['test', 'test', 'thing', 'other', 'other']), ['test', 'thing', 'other'])
})

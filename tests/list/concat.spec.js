import concat from '../../src/list/concat.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('concat -- Concated items together', () => {
  assert.deepEqual(concat(4, [1, 2, 3]), [1, 2, 3, 4])
  assert.deepEqual(concat('bar', 'foo'), 'foobar')
})

test('concat -- Joins an array value in, like Array.prototype.concat', () => {
  assert.deepEqual(concat([4, 5], [1, 2, 3]), [1, 2, 3, 4, 5])
  assert.deepEqual(concat([[4]], [1, 2, 3]), [1, 2, 3, [4]])
})

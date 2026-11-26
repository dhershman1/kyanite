import update from '../../src/array/update.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('update -- updates value at index', () => {
  const result = update(2, 10, [0, 1, 2, 3])

  assert.deepEqual(result, [0, 1, 10, 3])
})

test('update -- Handles string based arrays', () => {
  assert.deepEqual(update(1, 'haha', ['foo', 'bar', 'bax']), ['foo', 'haha', 'bax'])
})

test('update -- It only updates the index it was told', () => {
  assert.deepEqual(update(1, 10, [0, 1, 1, 2, 2, 3]), [0, 10, 1, 2, 2, 3])
})

test('update -- Works with negative index', () => {
  assert.deepEqual(update(-1, 10, [0, 2, 3, 4]), [0, 2, 3, 10], 'Updated last index value')
  assert.deepEqual(update(-3, 10, [0, 2, 3, 4]), [0, 10, 3, 4], 'Updated second index value')
})

test('update -- Safely gives back list when index out of bounds', () => {
  assert.deepEqual(update(5, 10, [0, 1, 2]), [0, 1, 2], 'Gave back list when postivie out of bounds')
  assert.deepEqual(update(-5, 10, [0, 1, 2]), [0, 1, 2], 'Gave back list when negative out of bounds')
})

test('update -- Is curried', () => {
  assert.deepEqual(update(2)(10)([0, 1, 2, 3]), [0, 1, 10, 3])
})

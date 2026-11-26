import remove from '../../src/array/remove.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('remove -- Removes from appointed index', () => {
  const result = remove(2, [0, 1, 2, 3])

  assert.deepEqual(result, [0, 1, 3])
})

test('remove -- Can handle string based arrays', () => {
  assert.deepEqual(remove(1, ['foo', 'bar']), ['foo'])
})

test('remove -- Is curried', () => {
  const remover = remove(2)
  const result = remover([1, 2, 3, 4])

  assert.deepEqual(result, [1, 2, 4])
})

test('remove -- Handles indecies that do not exist', () => {
  assert.deepEqual(remove(2, [1, 2]), [1, 2])
})

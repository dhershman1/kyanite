import insert from '../../src/array/insert.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('insert -- Inserts the desired value into the array', () => {
  const results = insert(2, 'x', [1, 2, 3, 4])

  assert.deepEqual(results, [1, 2, 'x', 3, 4])
})

test('insert -- Is curried', () => {
  const fn = insert()
  const ins = fn(2, 'x')

  assert.deepEqual(ins([1, 2, 3, 4]), [1, 2, 'x', 3, 4])
})

test('insert -- Handles double curry', () => {
  const x = insert(2)
  const y = x('x')

  assert.deepEqual(y([1, 2, 3, 4]), [1, 2, 'x', 3, 4])
})

test('insert -- Sets the id to the current array length', () => {
  assert.deepEqual(insert(-1, 'b', ['a', 'c', 'd']), ['a', 'c', 'd', 'b'])
})

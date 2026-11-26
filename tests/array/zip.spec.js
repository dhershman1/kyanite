import { test } from 'node:test'
import assert from 'node:assert/strict'
import zip from '../../src/array/zip.js'

test('zip -- Zipped even arrays', () => {
  const result = zip(['a', 'b', 'c'], [1, 2, 3])

  assert.deepEqual(result, { a: 1, b: 2, c: 3 })
})

test('zip -- Zipped different length arrays', () => {
  const res1 = zip(['a', 'b', 'c'], [1, 2, 3, 4])
  const res2 = zip(['a', 'b', 'c'], [1, 2])

  assert.deepEqual(res1, { a: 1, b: 2, c: 3 })
  assert.deepEqual(res2, { a: 1, b: 2 })
})

test('zip -- It is curried', () => {
  const z = zip(['a', 'b', 'c'])

  assert.deepEqual(z([1, 2, 3]), { a: 1, b: 2, c: 3 })
  assert.deepEqual(z([1, 2, 3, 4]), { a: 1, b: 2, c: 3 })
  assert.deepEqual(z([1, 2]), { a: 1, b: 2 })
})

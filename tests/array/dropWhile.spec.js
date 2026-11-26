import dropWhile from '../../src/array/dropWhile.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('dropWhile -- Basic usage tests', () => {
  assert.deepEqual(dropWhile(x => x <= 2, [1, 2, 3, 4, 3, 2, 1]), [3, 4, 3, 2, 1])
  assert.deepEqual(dropWhile(x => x !== 2, [0, 1, 9]), [])
})

test('dropWhile -- Is curried', () => {
  const fn = dropWhile(x => x <= 2)

  assert.deepEqual(fn([1, 2, 3, 4, 3, 2, 1]), [3, 4, 3, 2, 1])
  assert.deepEqual(fn([-1, 0, 1, 2, 3]), [3])
})

test('dropWhile -- Works with strings', () => {
  assert.equal(dropWhile(x => x === 'a', 'aabc'), 'bc')
  assert.equal(dropWhile(x => x === 'a', 'aaa'), '', 'Returns an empty string when every character matches')
})

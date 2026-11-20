import on from '../../src/function/on.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('on -- Returns value based on return of the first function', () => {
  const results = on((x, y) => x === y, x => x.length, 'you', 'are')

  assert.deepEqual(results, true)
})

test('on -- Returns based on the first functions result', () => {
  const results = on((x, y) => x === y, x => x.length, '', 'are')

  assert.deepEqual(results, false)
})

test('on -- Is curried', () => {
  const f = on((x, y) => x === y, x => x.length)

  assert.deepEqual(f('you', 'are'), true)
  assert.deepEqual(f('', 'a'), false)
})

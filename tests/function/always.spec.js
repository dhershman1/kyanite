import always from '../../src/function/always.js'
import branch from '../../src/function/branch.js'
import concat from '../../src/list/concat.js'
import identity from '../../src/function/identity.js'
import isEmpty from '../../src/function/isEmpty.js'
import length from '../../src/list/length.js'
import pipe from '../../src/function/pipe.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('always -- Basic tests', () => {
  assert.deepEqual(always([1, 2, 3], 1), [1, 2, 3])
  assert.deepEqual(always({ a: 1 }, true), { a: 1 })
  assert.deepEqual(always(12, false), 12)
  assert.deepEqual(always('test', 'thing'), 'test')
})

test('always -- Is curried', () => {
  const a = always(1)

  assert.equal(a(2), 1)
  assert.equal(a(null), 1)
})

test('always -- Pipe handling', () => {
  const results = pipe([
    branch(always(isEmpty([])), concat(1), identity),
    length
  ], [])

  assert.equal(results, 1)
})

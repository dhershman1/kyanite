import branch from '../../src/function/branch.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('branch -- Branches truthy', () => {
  const results = branch(
    x => x < 10,
    x => x + 1,
    x => x - 1,
    0
  )

  assert.deepEqual(results, 1)
})

test('branch -- Branches falsy', () => {
  const results = branch(
    x => x < 10,
    x => x + 1,
    x => x - 1,
    10
  )

  assert.deepEqual(results, 9)
})

test('branch -- Is curried', () => {
  const b = branch(
    x => x < 10,
    x => x + 1,
    x => x - 1
  )

  assert.deepEqual(b(0), 1)
  assert.deepEqual(b(10), 9)
})

test('branch -- break down curried', () => {
  const fn = branch(x => x < 10)
  const fn2 = fn(x => x + 1, x => x - 1)

  assert.deepEqual(fn2(0), 1)
  assert.deepEqual(fn2(10), 9)
})

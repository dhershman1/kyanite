import complement from '../../src/function/complement.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('complement -- Basic functionality', () => {
  assert.ok(!complement(Array.isArray, []))
  assert.ok(complement(Array.isArray, 10))
  assert.deepEqual(complement(Number.isInteger, 42), false)
  assert.deepEqual(complement(x => x > 10, 11), false)
  assert.deepEqual(complement(x => x < 10, 11), true)
})

test('complement -- Curried functionality', () => {
  const isNot = complement(Array.isArray)

  assert.ok(!isNot([]))
  assert.ok(isNot(10))
})

import clamp from '../../src/number/clamp.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('clamp -- Basic functionality', () => {
  assert.deepEqual(clamp(1, 900, 23), 23)
  assert.deepEqual(clamp(1, 900, 901), 900)
  assert.deepEqual(clamp(1, 900, 0), 1)
  assert.deepEqual(clamp(1, 900, 900), 900)
  assert.deepEqual(clamp(1, 900, 1), 1)
})

test('clamp -- Is curried', () => {
  const fn = clamp(1, 900)

  assert.deepEqual(fn(23), 23)
  assert.deepEqual(fn(901), 900)
  assert.deepEqual(fn(0), 1)
  assert.deepEqual(fn(900), 900)
  assert.deepEqual(fn(1), 1)
})

test('clamp -- Throws error', () => {
  try {
    clamp(900, 1, 30)
  } catch (err) {
    assert.equal(err.message, 'Min cannot be greater than max in clamp')
  }
})

import { test } from 'node:test'
import assert from 'node:assert/strict'
import mod from '../../src/number/mod.js'

test('mod -- Basic functionality', () => {
  assert.deepEqual(mod(-5, 4), 3)
  assert.deepEqual(mod(-17, 5), 3)
  assert.deepEqual(mod(17, 5), 2)
  assert.deepEqual(Number.isNaN(mod(17, -5)), true)
  assert.deepEqual(Number.isNaN(mod(17, 0)), true)
  assert.deepEqual(Number.isNaN(mod(17.2, 5)), true)
  assert.deepEqual(Number.isNaN(mod(17, 5.3)), true)
})

test('mod -- Is curried', () => {
  const fn = mod(17)

  assert.deepEqual(fn(5), 2)
  assert.deepEqual(Number.isNaN(fn(-5)), true)
  assert.deepEqual(Number.isNaN(fn(0)), true)
  assert.deepEqual(Number.isNaN(fn(5.3)), true)
})

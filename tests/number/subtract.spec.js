import sub from '../../src/number/subtract.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('sub -- Subtracts two numbers', () => {
  assert.equal(sub(2, 1), -1)
})

test('sub -- Converts string and subtracts anyway', () => {
  assert.equal(sub('2', 1), -1)
})

test('sub -- Treats a negative number as addition', () => {
  assert.equal(sub(-1, 3), 4)
})

test('sub -- Is curried', () => {
  const subtract = sub(3)

  assert.equal(subtract(1), -2)
  assert.equal(subtract('4'), 1)
})

import curryN from '../../src/function/curryN.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('curryN -- Curries as expected', () => {
  const add = curryN(2, (a, b) => a + b)
  const sum = add(2)

  assert.equal(sum(3), 5)
})

test('curryN -- Curry works with default params', () => {
  const add = curryN(2, (a, b = 1) => a + b)
  const sum = add(1)

  assert.equal(sum(3), 4)
  assert.equal(sum(undefined), 2)
})

test('curryN -- Curry throws out extra params', () => {
  const add = curryN(2, (a, b) => a + b)

  assert.equal(add(1, 2, 3), 3)
})

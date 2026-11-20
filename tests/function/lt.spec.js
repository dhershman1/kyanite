import lt from '../../src/function/lt.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('lt -- Determines if the numbers are lt', () => {
  assert.ok(lt(2, 1))
})

test('lt -- Determines if the letters are lt', () => {
  assert.ok(lt('b', 'a'))
})

test('lt -- It is curried', () => {
  const g = lt(2)

  assert.ok(g(1))
})

test('lt -- Compares equal values', () => {
  assert.ok(!lt(1, 1))
})

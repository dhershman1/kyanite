import every from '../../src/array/every.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('every -- Basic Functionality', () => {
  assert.ok(every(x => x > 0, [1, 2, 3, 4]))
  assert.ok(!every(x => x > 0, [-1, 0, 1]))
})

test('every -- Test Curried functionality', () => {
  const run = every(x => x < 4)

  assert.ok(run([1, 2, 3]))
  assert.ok(!run([4, 5, 6]))
})

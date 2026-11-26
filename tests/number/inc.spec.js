import { test } from 'node:test'
import assert from 'node:assert/strict'
import inc from '../../src/number/inc.js'

test('inc -- Increments a number', () => {
  assert.deepEqual(inc(1), 2)
  assert.deepEqual(inc(inc(1)), 3)
})

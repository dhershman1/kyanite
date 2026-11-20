import { test } from 'node:test'
import assert from 'node:assert/strict'
import dec from '../../src/number/dec.js'

test('dec -- Decrements a number', () => {
  assert.deepEqual(dec(1), 0)
  assert.deepEqual(dec(dec(3)), 1)
})

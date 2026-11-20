import { test } from 'node:test'
import assert from 'node:assert/strict'
import negate from '../../src/number/negate.js'

test('negate -- Basic functionality', () => {
  assert.equal(negate(1), -1)
  assert.equal(negate(-1), 1)
  assert.equal(negate(0), -0)
})

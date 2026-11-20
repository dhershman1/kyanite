import { test } from 'node:test'
import assert from 'node:assert/strict'
import isZero from '../../src/number/isZero.js'

test('isZero -- Basic functionality', () => {
  assert.deepEqual(isZero(1), false)
  assert.deepEqual(isZero('0'), false)
  assert.deepEqual(isZero(0), true)
})

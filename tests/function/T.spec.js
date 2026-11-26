import { test } from 'node:test'
import assert from 'node:assert/strict'
import T from '../../src/function/T.js'

test('T Basic Tests', () => {
  assert.deepEqual(T(), true, 'Returns true')
  assert.deepEqual(T(1, 2), true, 'Ignore Parameters')
})

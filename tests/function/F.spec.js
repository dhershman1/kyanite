import { test } from 'node:test'
import assert from 'node:assert/strict'
import F from '../../src/function/F.js'

test('F Basic Tests', () => {
  assert.deepEqual(F(), false, 'Returns false')
  assert.deepEqual(F(1, 2), false, 'Ignore Parameters')
})

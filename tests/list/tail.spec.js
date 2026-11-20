import { test } from 'node:test'
import assert from 'node:assert/strict'
import tail from '../../src/list/tail.js'

test('tail() Basics', () => {
  assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5], 'Gives back tail end of array')
  assert.deepEqual(tail('wow'), ['o', 'w'], 'Works properly with strings')
})

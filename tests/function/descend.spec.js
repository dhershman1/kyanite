import descend from '../../src/function/descend.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('descend -- Sorts in descending order', () => {
  const result = [4, 10, 1, 6, 7, 12].sort(descend)

  assert.deepEqual(result, [12, 10, 7, 6, 4, 1])
})

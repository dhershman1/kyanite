import ascend from '../../src/function/ascend.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('ascend -- Sorts in ascending order', () => {
  const result = [4, 10, 1, 6, 7, 12].sort(ascend)

  assert.deepEqual(result, [1, 4, 6, 7, 10, 12])
})

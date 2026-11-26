import both from '../../src/function/both.js'
import prop from '../../src/object/prop.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('both -- Handles normal functionality', () => {
  const results = both(x => x > 10, x => x < 20, 15)
  const geo = { geometry: [1, 2, 3], coordinates: [34, 56] }

  assert.ok(results)
  assert.deepEqual(both(prop('geometry'), prop('coordinates'), geo), [34, 56])
})

test('both -- Is curried', () => {
  const b = both(x => x > 10, x => x < 20)

  assert.ok(b(15))
  assert.ok(!b(9))
})

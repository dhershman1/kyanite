import either from '../../src/function/either.js'
import prop from '../../src/object/prop.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('either -- Basic functionality', () => {
  const geo = { geometry: [1, 2, 3], coordinates: [34, 56] }

  assert.ok(either(x => x > 10, x => x < 20, 21))
  assert.ok(!either(x => x < 10, x => x === 11, 12))
  assert.deepEqual(either(prop('geometry'), prop('coordinates'), geo), [1, 2, 3])
})

test('either -- Is curried', () => {
  const fn = either(x => x < 10, x => x === 11)

  assert.ok(fn(9))
  assert.ok(fn(11))
  assert.ok(!fn(12))
})

import props from '../../src/object/props.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('props -- Grabs the requested values from the object', () => {
  const results = props(['a', 'b'], { a: 1, b: 2, c: 3 })

  assert.deepEqual(results, [1, 2])
})

test('props -- Is curried', () => {
  const g = props(['a', 'b'])

  assert.deepEqual(g({ a: 1, b: 2, c: 3 }), [1, 2])
})

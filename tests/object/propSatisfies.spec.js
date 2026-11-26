import { test } from 'node:test'
import assert from 'node:assert/strict'
import propSatisfies from '../../src/object/propSatisfies.js'

test('propSatisfies -- Basic', () => {
  assert.deepEqual(propSatisfies(x => x > 0, 'x', { x: 1, y: 2 }), true)
  assert.deepEqual(propSatisfies(y => y > 0, 'y', { x: 1, y: 4 }), true)
  assert.deepEqual(propSatisfies(y => y > 0, 'b', { a: 3 }), false)
})

test('propSatisfies -- Is curries', () => {
  const fn = propSatisfies(y => y > 0)
  const safetyProp = fn('y')

  assert.deepEqual(fn('x', { x: 1 }), true)
  assert.deepEqual(fn('x', { a: 1 }), false)
  assert.deepEqual(safetyProp({ x: 1, y: 4 }), true)
  assert.deepEqual(safetyProp({ a: 1, b: 2 }), false)
})

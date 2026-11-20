import { test } from 'node:test'
import assert from 'node:assert/strict'
import pathSatisfies from '../../src/object/pathSatisfies.js'

test('pathSatisfies -- Handles objects', () => {
  assert.deepEqual(pathSatisfies(y => y > 0, ['x', 'y'], { x: { y: 2 } }), true)
  assert.deepEqual(pathSatisfies(y => y > 0, ['a', 'b', 'c'], { a: 3 }), false)
})

test('pathSatisfies -- is curried', () => {
  const safetyPath = pathSatisfies(y => y > 0, ['x', 'y'])

  assert.deepEqual(safetyPath({ x: { y: 2 } }), true)
  assert.deepEqual(safetyPath({ a: { y: 2 } }), false)
})

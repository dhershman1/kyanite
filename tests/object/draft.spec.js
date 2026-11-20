import draft from '../../src/object/draft.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('draft -- Applies the function to all object values', () => {
  const results = draft(x => x * 2, {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  })

  assert.deepEqual(results, {
    a: 2,
    b: 4,
    c: 6,
    d: 8
  })
})

test('draft -- Is curried', () => {
  const p = draft(x => x * 2)
  const results = p({
    a: 1,
    b: 2,
    c: 3,
    d: 4
  })

  assert.deepEqual(results, {
    a: 2,
    b: 4,
    c: 6,
    d: 8
  })
})

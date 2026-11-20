import { test } from 'node:test'
import assert from 'node:assert/strict'
import amend from '../../src/object/amend.js'

test('amend -- Basic Functionality', () => {
  assert.deepEqual(amend({ b: 2 }, { a: 1 }), { a: 1, b: 2 })
})

test('amend -- No ref mutation', () => {
  const tmp = { a: 1, b: 2 }

  assert.deepEqual(amend(tmp, { c: 3 }), { a: 1, b: 2, c: 3 })
  assert.deepEqual(tmp, { a: 1, b: 2 })
})

test('amend -- Is curried', () => {
  const fn = amend({ b: 2 })

  assert.deepEqual(fn({ a: 1 }), { a: 1, b: 2 })
  assert.deepEqual(fn({ c: 3 }), { c: 3, b: 2 })
})

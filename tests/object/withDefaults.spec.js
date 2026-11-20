import { test } from 'node:test'
import assert from 'node:assert/strict'
import withDefaults from '../../src/object/withDefaults.js'

test('withDefaults -- Fills in nil values with defaults', () => {
  assert.deepEqual(withDefaults({ a: 1, b: 2, c: 3 }, { b: 2, c: 3 }), { a: 1, b: 2, c: 3 })
  assert.deepEqual(withDefaults({ a: 1, b: 2, c: 3 }, { b: 10, c: 4 }), { a: 1, b: 10, c: 4 })
  assert.deepEqual(withDefaults({ a: 1, b: 2, c: 3 }, { a: null, b: 10, c: 4 }), { a: 1, b: 10, c: 4 })
  assert.deepEqual(withDefaults({ a: 1, b: 2, c: 3 }, { b: NaN, c: 4 }), { a: 1, b: 2, c: 4 })
})

test('withDefaults -- Is curried', () => {
  const fn = withDefaults({ a: 1, b: 2, c: 3 })

  assert.deepEqual(fn({ b: 10, c: 4 }), { a: 1, b: 10, c: 4 })
  assert.deepEqual(fn({ a: 12 }), { a: 12, b: 2, c: 3 })
  assert.deepEqual(fn({}), { a: 1, b: 2, c: 3 })
})

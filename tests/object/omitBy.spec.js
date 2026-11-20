import { test } from 'node:test'
import assert from 'node:assert/strict'
import omitBy from '../../src/object/omitBy.js'

test('Basic Omit', () => {
  const original = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  }
  const expected = { a: 1, b: 2 }

  assert.deepEqual(omitBy(x => x < 3, original), expected, 'Omitted out values that did not pass our pred')
  assert.deepEqual(original.c, 3, 'Original still has c value')
  assert.deepEqual(original.d, 4, 'Original still has d value')
})

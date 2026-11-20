import { test } from 'node:test'
import assert from 'node:assert/strict'
import whole from '../../src/object/whole.js'

const result = whole({
  a: x => x === 'foo',
  b: x => x !== 'bar',
  x: x => x > 10,
  y: x => x < 20
})

test('whole -- predicate is true', () => {
  assert.equal(result({ a: 'foo', b: 'xxx', x: 11, y: 19 }), true)
})

test('whole -- predicate is false', () => {
  assert.equal(result({ a: 'xxx', b: 'xxx', x: 11, y: 19 }), false)
})

test('whole -- validate all props exist', () => {
  const fn = whole({
    a: x => x,
    b: x => x
  })

  assert.deepEqual(fn({ a: 1 }), false)
})

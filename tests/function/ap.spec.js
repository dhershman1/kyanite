import ap from '../../src/function/ap.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('ap -- Applies the provided list over our array of data', () => {
  const res = ap(x => y => x + y, z => z * 2, 2)

  assert.deepEqual(res, 6)
  assert.deepEqual(ap(x => y => x + y, z => z * 2, 3), 9)
})

test('ap -- State setter and getter', () => {
  const state = {
    a: {
      b: 2
    }
  }
  const res = ap(s => doubleB => ({
    ...s,
    a: { b: doubleB }
  }), s => s.a.b * 2, state)

  assert.deepEqual(res, { a: { b: 4 } })
})

// test('ap -- Is curried', () => {
//   const a = ap([x => x + 1, x => x * 2])

//   assert.deepEqual(a([1, 2, 3]), [2, 3, 4, 2, 4, 6])
//   assert.deepEqual(a([3, 4, 5]), [4, 5, 6, 6, 8, 10])
// })

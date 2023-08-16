import ap from '../../src/function/ap.js'
import test from 'tape'

test('ap -- Applies the provided list over our array of data', t => {
  const res = ap(x => y => x + y, z => z * 2, 2)

  t.same(res, 6)
  t.same(ap(x => y => x + y, z => z * 2, 3), 9)
  t.end()
})

test('ap -- State setter and getter', t => {
  const state = {
    a: {
      b: 2
    }
  }
  const res = ap(s => doubleB => ({
    ...s,
    a: { b: doubleB }
  }), s => s.a.b * 2, state)

  t.deepEqual(res, { a: { b: 4 } })
  t.end()
})

// test('ap -- Is curried', t => {
//   const a = ap([x => x + 1, x => x * 2])

//   t.same(a([1, 2, 3]), [2, 3, 4, 2, 4, 6])
//   t.same(a([3, 4, 5]), [4, 5, 6, 6, 8, 10])
//   t.end()
// })

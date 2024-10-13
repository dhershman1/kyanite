import test from 'tape'
import fromPairs from '../../src/array/fromPairs.js'

test('Basic Pairing', t => {
  t.same(fromPairs([['a', 1], ['b', 2], ['c', 3]]), { a: 1, b: 2, c: 3 })
  t.same(fromPairs([]), {}, 'Handles Empty Array')
  t.same(fromPairs([[1, 'a'], [2, 'b']]), { 1: 'a', 2: 'b' }, 'Handles number keys')
  t.end()
})

test('Handles complex types', t => {
  t.same(fromPairs([['a', { b: 1 }], ['c', { d: 2 }]]), { a: { b: 1 }, c: { d: 2 } })
  t.same(fromPairs([['a', [1, 2]], ['b', [3, 4]]]), { a: [1, 2], b: [3, 4] })
  t.end()
})

test('Handles invalid array', t => {
  t.same(fromPairs([[]]), {})
  t.same(fromPairs([[], []]), {})
  t.end()
})

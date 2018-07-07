import ap from '../../src/function/ap'
import test from 'tape'

test('Applies the provided list over our array of data', t => {
  const results = ap([x => x + 1, x => x * 2], [1, 2, 3])

  t.same(results, [2, 3, 4, 2, 4, 6])
  t.end()
})

test('Is curried', t => {
  const a = ap([x => x + 1, x => x * 2])

  t.same(a([1, 2, 3]), [2, 3, 4, 2, 4, 6])
  t.same(a([3, 4, 5]), [4, 5, 6, 6, 8, 10])
  t.end()
})

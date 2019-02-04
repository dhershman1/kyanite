import test from 'tape'
import addIndex from '../../src/function/addIndex'
import map from '../../src/array/map'
import filter from '../../src/array/filter'
import reduce from '../../src/function/reduce'

const data = ['f', 'o', 'o', 'b', 'a', 'r']

test('addIndex -- Basic 2 argument functionality', t => {
  const m = addIndex(map)
  const f = addIndex(filter)

  t.same(m((x, i) => `${x}-${i}`, data), ['f-0', 'o-1', 'o-2', 'b-3', 'a-4', 'r-5'])
  t.same(f((_, i) => i > 2, data), ['b', 'a', 'r'])
  t.end()
})

test('addIndex -- Reduce 3 argument functionality', t => {
  const fn = addIndex(reduce)

  t.same(fn((val, acc, i) => acc.concat(val + i), [], data), ['f0', 'o1', 'o2', 'b3', 'a4', 'r5'])
  t.end()
})

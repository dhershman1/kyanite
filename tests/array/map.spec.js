import map from '../../src/array/map.js'
import test from 'tape'

const dbl = n => n * 2

test('map -- Basic functionality on Arrays', t => {
  t.same(map(dbl, []), [])
  t.same(map(dbl, [1, 2, 3]), [2, 4, 6])
  t.end()
})

test('map -- Test is Curried', t => {
  const dbler = map(dbl)

  t.same(dbler([1, 2, 3, 4]), [2, 4, 6, 8])
  t.end()
})

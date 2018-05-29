import map from '../src/map'
import test from 'tape'

const dbl = n => n * 2

test('Basic functionality on Arrays', t => {
  t.deepEqual(map(dbl, []), [])
  t.deepEqual(map(dbl, [1, 2, 3]), [2, 4, 6])
  t.end()
})

test('Test is Curried', t => {
  const dbler = map(dbl)

  t.deepEqual(dbler([1, 2, 3, 4]), [2, 4, 6, 8])
  t.end()
})

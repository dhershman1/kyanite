import test from 'tape'
import fold from '../../src/array/fold.js'

test('fold -- Basic functionality', t => {
  const results = fold((a, acc) => a <= acc ? a : acc, [5, 6, 3, 9, 1])

  t.same(results, 1)
  t.same(fold((a, acc) => a + acc, [1, 2, 3, 4, 5]), 15)
  t.end()
})

test('fold -- Is curried', t => {
  const fn = fold((a, acc) => a <= acc ? a : acc)

  t.same(fn([5, 4, 19, 20, 32, 1]), 1)
  t.same(fn(['z', 'x', 'd', 'p']), 'd')
  t.end()
})

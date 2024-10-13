import flip from '../../src/function/flip.js'
import test from 'tape'

test('flip -- Basic functionlity', t => {
  t.same(flip((a, b) => b > a, 2, 1), true)
  t.same(flip((a, b) => b > a, 1, 2), false)
  t.end()
})

test('flip -- Is curried', t => {
  const _gt = flip((a, b) => b > a)

  t.same(_gt(1, 2), false)
  t.same(_gt(2, 1), true)
  t.end()
})

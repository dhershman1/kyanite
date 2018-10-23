import clamp from '../../src/number/clamp'
import test from 'tape'

test('clamp -- Basic functionality', t => {
  t.same(clamp(1, 900, 23), 23)
  t.same(clamp(1, 900, 901), 900)
  t.same(clamp(1, 900, 0), 1)
  t.same(clamp(1, 900, 900), 900)
  t.same(clamp(1, 900, 1), 1)
  t.end()
})

test('clamp -- Is curried', t => {
  const fn = clamp(1, 900)

  t.same(fn(23), 23)
  t.same(fn(901), 900)
  t.same(fn(0), 1)
  t.same(fn(900), 900)
  t.same(fn(1), 1)
  t.end()
})

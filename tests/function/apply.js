import apply from '../../src/function/apply'
import test from 'tape'

test('apply -- Basic usage', t => {
  t.equal(apply(Math.max, [1, 2, 3, -99, 42, 6, 7]), 42)
  t.equal(apply(x => x * 2, [2]), 4)
  t.end()
})

test('apply -- Is curried', t => {
  const fn = apply(Math.max)

  t.equal(fn([1, 2, 3, -99, 42, 6, 7]), 42)
  t.equal(fn([73, 1, 16, 99, 100]), 100)
  t.end()
})

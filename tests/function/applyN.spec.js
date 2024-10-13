import applyN from '../../src/function/applyN.js'
import test from 'tape'

test('applyN -- Basic usage', t => {
  t.equal(applyN(Math.max, [1, 2, 3, -99, 42, 6, 7]), 42)
  t.equal(applyN(x => x * 2, [2]), 4)
  t.end()
})

test('applyN -- Is curried', t => {
  const fn = applyN(Math.max)

  t.equal(fn([1, 2, 3, -99, 42, 6, 7]), 42)
  t.equal(fn([73, 1, 16, 99, 100]), 100)
  t.end()
})

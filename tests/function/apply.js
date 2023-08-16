import apply from '../../src/function/apply.js'
import test from 'tape'

test('apply -- Basic usage', t => {
  t.equal(apply(x => x * 2, 2), 4)
  t.end()
})

test('apply -- Is curried', t => {
  const fn = apply(x => x > 5)

  t.equal(fn(5), false)
  t.equal(fn(8), true)
  t.end()
})

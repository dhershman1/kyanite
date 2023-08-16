import test from 'tape'
import sum from '../../src/number/sum.js'

test('sum -- Adds array of numbers', t => {
  t.same(sum([1, 2, 3]), 6)
  t.same(sum([1, 2, -3]), 0)
  t.end()
})

test('sum -- Technically works with strings', t => {
  t.same(sum(['a', 'b', 'c']), 'cba0')
  t.end()
})

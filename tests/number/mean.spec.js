import mean from '../../src/number/mean.js'
import test from 'tape'

test('mean -- Test base functionality', t => {
  const results = mean([1, 2, 3, 2])

  t.ok(results)
  t.is(results, 2)
  t.end()
})

test('mean -- Returns mean of a single value list', t => {
  t.is(mean([2]), 2)
  t.end()
})

test('mean -- Returns NaN for empty lists', t => {
  t.same(Number.isNaN(mean([])), true)
  t.end()
})

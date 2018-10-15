import mean from '../../src/number/mean'
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

test('mean -- Errors when provided nothing', t => {
  try {
    mean()
  } catch (err) {
    t.is(err.message, 'Cannot read property \'length\' of undefined')
    t.end()
  }
})

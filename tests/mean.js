import mean from '../src/mean'
import test from 'tape'

test('Test base functionality', t => {
  const results = mean([1, 2, 3, 2])

  t.ok(results)
  t.is(results, 2)
  t.end()
})

test('Returns mean of a single value list', t => {
  t.is(mean([2]), 2)
  t.end()
})

test('Returns NaN for empty lists', t => {
  t.equal(mean([]), 0)
  t.end()
})

test('Returns NaN when nothing is passed', t => {
  t.equal(mean(), 0)
  t.end()
})

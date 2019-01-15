import test from 'tape'
import within from '../../src/number/within'

test('within -- Handles within main numbers', t => {
  t.true(within(1, 10, 9))
  t.true(within(1, 10, 3))
  t.false(within(1, 10, 13))
  t.false(within(1, 10, NaN))
  t.false(within(1, 10, 10))
  t.end()
})

test('within -- Is curried teir 1', t => {
  const b = within(1)

  t.true(b(10, 9))
  t.false(b(10, 11))
  t.end()
})

test('within -- Is curried teir 2', t => {
  const b = within(1, 10)

  t.true(b(9))
  t.false(b(11))
  t.end()
})

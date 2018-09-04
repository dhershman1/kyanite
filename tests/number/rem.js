import rem from '../../src/number/rem'
import test from 'tape'

test('Handles obtaining remainders', t => {
  t.is(rem(5, 12), 2)
  t.is(rem(2, -1), -1)
  t.is(rem(2, 5.5), 1.5)
  t.true(isNaN(rem(2, NaN)))
  t.end()
})

test('Is curried', t => {
  const r = rem(5)

  t.is(r(12), 2)
  t.end()
})

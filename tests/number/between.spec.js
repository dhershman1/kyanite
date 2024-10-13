import between from '../../src/number/between.js'
import test from 'tape'

test('between -- Handles between main numbers', t => {
  t.true(between(1, 10, 9))
  t.true(between(1, 10, 3))
  t.false(between(1, 10, 13))
  t.false(between(1, 10, NaN))
  t.end()
})

test('between -- Is curried teir 1', t => {
  const b = between(1)

  t.true(b(10, 9))
  t.false(b(10, 11))
  t.end()
})

test('between -- Is curried teir 2', t => {
  const b = between(1, 10)

  t.true(b(9))
  t.false(b(11))
  t.end()
})

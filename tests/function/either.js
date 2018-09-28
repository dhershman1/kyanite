import either from '../../src/function/either'
import test from 'tape'

test('either -- Basic functionality', t => {
  t.true(either(x => x > 10, x => x < 20, 21))
  t.false(either(x => x < 10, x => x === 11, 12))
  t.end()
})

test('either -- Is curried', t => {
  const fn = either(x => x < 10, x => x === 11)

  t.true(fn(9))
  t.true(fn(11))
  t.false(fn(12))
  t.end()
})

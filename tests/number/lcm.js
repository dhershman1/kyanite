import lcm from '../../src/number/lcm'
import test from 'tape'

test('lcm -- Gets the lcm of two numbers', t => {
  t.is(lcm(90, 70), 630)
  t.end()
})

test('lcm -- Is curried', t => {
  const x = lcm(90)

  t.is(x(4), 180)
  t.end()
})

import lcm from '../src/lcm'
import test from 'tape'

test('Gets the lcm of two numbers', t => {
  t.is(lcm(90, 70), 630)
  t.end()
})

test('Is curried', t => {
  const x = lcm(90)

  t.is(x(4), 180)
  t.end()
})

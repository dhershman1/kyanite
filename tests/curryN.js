import curryN from '../src/curryN'
import test from 'tape'

test('Curries as expected', t => {
  const add = curryN(2, (a, b) => a + b)
  const sum = add(2)

  t.is(sum(3), 5)
  t.end()
})

test('Curry works with default params', t => {
  const add = curryN(2, (a, b = 1) => a + b)
  const sum = add(1)

  t.is(sum(3), 4)
  t.is(sum(undefined), 2)
  t.end()
})

test('Curry throws out extra params', t => {
  const add = curryN(2, (a, b) => a + b)

  t.is(add(1, 2, 3), 3)
  t.end()
})

import sub from '../src/sub'
import test from 'tape'

test('Subtracts two numbers', t => {
  t.is(sub(1, 2), -1)
  t.end()
})

test('Converts string and subtracts anyway', t => {
  t.is(sub(1, '2'), -1)
  t.end()
})

test('Treats a negative number as addition', t => {
  t.is(sub(3, -1), 4)
  t.end()
})

test('Is curried', t => {
  const subtract = sub(3)

  t.is(subtract(1), 2)
  t.is(subtract('4'), -1)
  t.end()
})

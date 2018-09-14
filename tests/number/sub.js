import sub from '../../src/number/sub'
import test from 'tape'

test('sub -- Subtracts two numbers', t => {
  t.is(sub(1, 2), -1)
  t.end()
})

test('sub -- Converts string and subtracts anyway', t => {
  t.is(sub(1, '2'), -1)
  t.end()
})

test('sub -- Treats a negative number as addition', t => {
  t.is(sub(3, -1), 4)
  t.end()
})

test('sub -- Is curried', t => {
  const subtract = sub(3)

  t.is(subtract(1), 2)
  t.is(subtract('4'), -1)
  t.end()
})

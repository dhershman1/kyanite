import sub from '../../src/number/subtract.js'
import test from 'tape'

test('sub -- Subtracts two numbers', t => {
  t.is(sub(2, 1), -1)
  t.end()
})

test('sub -- Converts string and subtracts anyway', t => {
  t.is(sub('2', 1), -1)
  t.end()
})

test('sub -- Treats a negative number as addition', t => {
  t.is(sub(-1, 3), 4)
  t.end()
})

test('sub -- Is curried', t => {
  const subtract = sub(3)

  t.is(subtract(1), -2)
  t.is(subtract('4'), 1)
  t.end()
})

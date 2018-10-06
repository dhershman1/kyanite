import add from '../../src/number/add'
import test from 'tape'

test('add -- Adds two numbers together', t => {
  t.is(add(1, 2), 3)

  t.end()
})

test('add -- Handles if input is a string', t => {
  t.is(add(1, '2'), 3)

  t.end()
})

test('add -- Handles if both inputs are strings', t => {
  t.is(add('1', '10'), 11)

  t.end()
})

test('add -- Is curried', t => {
  const adder = add(3)

  t.is(adder(4), 7)
  t.is(adder('4'), 7)

  t.end()
})

test('add -- Handles more than just 2 params', t => {
  t.same(add(1, 2, 3, 4), 10)
  t.same(add(2, 3, 4, 5, 6), 20)
  t.end()
})

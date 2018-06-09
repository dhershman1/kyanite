import add from '../src/add'
import test from 'tape'

test('Adds two numbers together', t => {
  t.is(add(1, 2), 3)

  t.end()
})

test('Handles if input is a string', t => {
  t.is(add(1, '2'), 3)

  t.end()
})

test('Handles if both inputs are strings', t => {
  t.is(add('1', '10'), 11)

  t.end()
})

test('Is curried', t => {
  const adder = add(3)

  t.is(adder(4), 7)
  t.is(adder('4'), 7)

  t.end()
})

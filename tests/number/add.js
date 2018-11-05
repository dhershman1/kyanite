import add from '../../src/number/add'
import test from 'tape'

test('add -- Adds two numbers together', t => {
  t.is(add(1, 2), 3)

  t.end()
})

test('add -- Acts like a normal concat if value is a string', t => {
  t.is(add(1, '2'), '12')
  t.is(add('1', '10'), '110')

  t.end()
})

test('add -- Is curried', t => {
  const adder = add(3)

  t.is(adder(4), 7)
  t.end()
})

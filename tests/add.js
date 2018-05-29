import add from '../src/add'
import test from 'tape'

test('Adds two numbers together', t => {
  t.is(add(1, 2), 3)

  t.end()
})

test('Combines strings instead of adding', t => {
  t.is(add(1, '2'), '12')

  t.end()
})

test('Is curried', t => {
  const adder = add(3)

  t.is(adder(4), 7)
  t.is(adder('4'), '34')

  t.end()
})

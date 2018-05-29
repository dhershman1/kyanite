import nth from '../src/nth'
import test from 'tape'

test('Test base functionality', t => {
  const list = ['foo', 'bar', 'baz', 'quux']

  t.is(nth(1, list), 'bar')
  t.is(nth(-1, list), 'quux')
  t.notOk(nth(-99, list))
  t.end()
})

test('Test string functionality', t => {
  t.is(nth(1, 'abc'), 'b')
  t.is(nth(3, 'abc'), undefined)
  t.is(nth(0, 'abc'), 'a')
  t.end()
})

test('Test curried nth', t => {
  const third = nth(2)

  t.is(third([1, 2, 3, 4]), 3)
  t.is(third('abcd'), 'c')
  t.end()
})

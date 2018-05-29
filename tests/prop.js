import prop from '../src/prop'
import test from 'tape'

/* eslint-disable no-undefined */

test('Returns the desired property value', t => {
  t.is(prop('thing', { thing: 'test' }), 'test')
  t.end()
})

test('Is curried', t => {
  const proper = prop('a')

  t.is(proper({ a: 1 }), 1)
  t.end()
})

test('Use it as a function for mapping', t => {
  t.deepEqual([{ a: 1 }, { a: 2 }, { a: 3 }].map(prop('a')), [1, 2, 3])
  t.end()
})

test('Returns undefined for empty value', t => {
  t.is(prop('x', {}), undefined)
  t.end()
})

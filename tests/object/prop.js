import prop from '../../src/object/prop'
import test from 'tape'

test('prop -- Returns the desired property value', t => {
  t.is(prop('thing', { thing: 'test' }), 'test')
  t.end()
})

test('prop -- Is curried', t => {
  const proper = prop('a')

  t.is(proper({ a: 1 }), 1)
  t.end()
})

test('prop -- Use it as a function for mapping', t => {
  t.deepEqual([{ a: 1 }, { a: 2 }, { a: 3 }].map(prop('a')), [1, 2, 3])
  t.end()
})

test('prop -- Returns undefined for empty value or if object does not exist', t => {
  t.is(prop('x', {}), undefined)
  t.is(prop('x', null), undefined)
  t.end()
})

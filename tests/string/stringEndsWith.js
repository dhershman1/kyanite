import test from 'tape'
import stringEndsWith from '../../src/string/stringEndsWith'

test('endsWith -- Searches for a string at the end of a string', t => {
  t.same(stringEndsWith('foo', 'fooBar'), false)
  t.same(stringEndsWith('baz', 'fooBaz'), false)
  t.same(stringEndsWith('Baz', 'fooBaz'), true)
  t.end()
})

test('endsWith -- Is curried', t => {
  const fn = stringEndsWith('Bar')

  t.same(fn('fooBar'), true)
  t.same(fn('fooBaz'), false)
  t.end()
})

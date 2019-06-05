import test from 'tape'
import startsWith from '../../src/string/startsWith'

test('startsWith -- Searches for a string at the beginning of a string', t => {
  t.same(startsWith('foo', 'fooBar'), true)
  t.same(startsWith('baz', 'fooBar'), false)
  t.end()
})

test('statsWith -- Is curried', t => {
  const fn = startsWith('foo')

  t.same(fn('fooBar'), true)
  t.same(fn('bazBar'), false)
  t.end()
})

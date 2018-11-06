import test from 'tape'
import replace from '../../src/string/replace'

test('replace -- Replaces a string value', t => {
  t.is(replace('foo', 'bar', 'foofoo'), 'barfoo')
  t.is(replace(/foo/g, 'bar', 'foofoo'), 'barbar')
  t.end()
})

test('replace -- Is curried', t => {
  const fn = replace('foo')
  const fn2 = fn('bar')

  t.is(fn2('foofoo'), 'barfoo')
  t.is(fn('baz', 'foofoo'), 'bazfoo')
  t.end()
})

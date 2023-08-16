import test from 'tape'
import propOr from '../../src/object/propOr.js'

test('propOr -- Basic functionality', t => {
  t.same(propOr('N/A', 'foo', { bar: 1, foo: 2 }), 2)
  t.same(propOr('N/A', 'foo', { bar: 1 }), 'N/A')
  t.end()
})

test('propOr -- Handles null objects', t => {
  t.same(propOr('N/A', 'foo', null), 'N/A')
  t.end()
})

test('propOr -- Is curried', t => {
  const fn = propOr('N/A')
  const gn = fn('foo')

  t.same(fn('bar', { bar: 1 }), 1)
  t.same(fn('bar', { foo: 1 }), 'N/A')
  t.same(gn({ foo: 1 }), 1)
  t.same(gn({ baz: 1 }), 'N/A')
  t.end()
})

import test from 'tape'
import defaultTo from '../../src/function/defaultTo.js'

test('defaultTo -- Basic functionality', t => {
  t.same(defaultTo('foo', null), 'foo')
  t.same(defaultTo('foo', NaN), 'foo')
  t.same(defaultTo('foo', 'bar'), 'bar')
  t.same(defaultTo('foo', undefined), 'foo')
  t.end()
})

test('defaultTo -- Is curried', t => {
  const fn = defaultTo('foo')

  t.same(fn(null), 'foo')
  t.same(fn(NaN), 'foo')
  t.same(fn(undefined), 'foo')
  t.same(fn('bar'), 'bar')
  t.end()
})

import test from 'tape'
import pathOr from '../../src/object/pathOr'

test('pathOr -- Handles basic functionality', t => {
  t.same(pathOr('N/A', ['a', 'b'], { a: { b: 1 } }), 1)
  t.same(pathOr('N/A', ['c', 'b'], { a: { b: 1 } }), 'N/A')
  t.end()
})

test('pathOr -- Handles null/undefined', t => {
  t.same(pathOr('N/A', ['foo'], null), 'N/A')
  t.same(pathOr('N/A', ['foo'], undefined), 'N/A')
  t.end()
})

test('pathOr -- Its curried', t => {
  const fn = pathOr('N/A')
  const withKeys = fn(['a', 'b'])

  t.same(fn(['c', 'd'], { c: { d: 2 } }), 2)
  t.same(withKeys({ a: { b: 1 } }), 1)
  t.same(fn(['c', 'd'], { d: { c: 1 } }), 'N/A')
  t.same(withKeys({ b: { a: 1 } }), 'N/A')
  t.end()
})

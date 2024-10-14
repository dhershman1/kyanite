import eqBy from '../../src/function/eqBy.js'
import test from 'tape'

test('eqBy -- Compares basic values', t => {
  t.same(eqBy(x => x + 1, 1, 1), true)
  t.same(eqBy(x => x.length, 'foo', 'bar'), true)
  t.same(eqBy(Math.abs, 5, -5), true)
  t.same(eqBy(x => x.length, 'foo', 'fo'), false)
  t.same(eqBy(Number, 'h', 'h'), true)
  t.end()
})

test('eqBy -- Compares more complex types', t => {
  t.same(eqBy(x => x.foo, { foo: 1 }, { foo: 1 }), true)
  t.same(eqBy(x => x.foo, { foo: {} }, { foo: {} }), false)
  t.same(eqBy(x => x.length, [1], [1]), true)
  t.end()
})

test('eqBy -- Is curried', t => {
  const fn = eqBy(Math.abs)

  t.same(fn(5, -5), true)
  t.same(fn(5, -3), false)
  t.end()
})

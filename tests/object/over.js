import test from 'tape'
import over from '../../src/object/over.js'

test('over -- Basic functionality', t => {
  t.same(over('b', x => x + 1, { a: 1, b: 1, c: 3 }), { a: 1, b: 2, c: 3 })
  t.end()
})

test('over -- Is curried', t => {
  const fn = over('b')
  const o = fn(x => x + 1)

  t.same(fn(x => x - 1, { a: 1, b: 3 }), { a: 1, b: 2 })
  t.same(o({ a: 1, b: 1 }), { a: 1, b: 2 })
  t.end()
})

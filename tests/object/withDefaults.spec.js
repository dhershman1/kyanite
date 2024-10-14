import test from 'tape'
import withDefaults from '../../src/object/withDefaults.js'

test('withDefaults -- Fills in nil values with defaults', t => {
  t.same(withDefaults({ a: 1, b: 2, c: 3 }, { b: 2, c: 3 }), { a: 1, b: 2, c: 3 })
  t.same(withDefaults({ a: 1, b: 2, c: 3 }, { b: 10, c: 4 }), { a: 1, b: 10, c: 4 })
  t.same(withDefaults({ a: 1, b: 2, c: 3 }, { a: null, b: 10, c: 4 }), { a: 1, b: 10, c: 4 })
  t.same(withDefaults({ a: 1, b: 2, c: 3 }, { b: NaN, c: 4 }), { a: 1, b: 2, c: 4 })
  t.end()
})

test('withDefaults -- Is curried', t => {
  const fn = withDefaults({ a: 1, b: 2, c: 3 })

  t.same(fn({ b: 10, c: 4 }), { a: 1, b: 10, c: 4 })
  t.same(fn({ a: 12 }), { a: 12, b: 2, c: 3 })
  t.same(fn({}), { a: 1, b: 2, c: 3 })
  t.end()
})

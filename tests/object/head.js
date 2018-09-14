import head from '../../src/object/head'
import test from 'tape'

test('head -- Returns the first value of an object (simple)', t => {
  const result = head({ a: 1, b: 2, c: 3 })

  t.same(result, 1)
  t.end()
})

test('head -- Returns the first value complex data', t => {
  const result = head({ a: { b: 2, c: 3 }, d: 4 })

  t.same(result, { b: 2, c: 3 })
  t.end()
})

test('head -- Handles empty objects', t => {
  t.same(head({}), {})
  t.end()
})

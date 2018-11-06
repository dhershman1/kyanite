import test from 'tape'
import amend from '../../src/object/amend'

test('amend -- Basic Functionality', t => {
  t.same(amend({ b: 2 }, { a: 1 }), { a: 1, b: 2 })
  t.end()
})

test('amend -- Is curried', t => {
  const fn = amend({ b: 2 })

  t.same(fn({ a: 1 }), { a: 1, b: 2 })
  t.same(fn({ c: 3 }), { c: 3, b: 2 })
  t.end()
})

import path from '../../src/object/path.js'
import test from 'tape'

test('path -- Returns back value when found', t => {
  const result = path(['a', 'b'], { a: { b: 2 } })

  t.is(result, 2, 'Found the value of 2 from the object')
  t.end()
})

test('path -- Safely Navigates bad objects', t => {
  const result = path(['a', 'b', 'c'], { a: 2 })

  t.notOk(result, 'Returns a falsy value for bad objects')
  t.end()
})

test('path -- Navigates tricky broken objects', t => {
  const result = path(['a', 'b', 'c'], { a: { c: { b: 4 } } })

  t.notOk(result, 'Correctly did not find the value with the given path')
  t.end()
})

test('path -- Is curried', t => {
  const fn = path(['foo', 'bar'])

  t.same(fn({ foo: { bar: 1 } }), 1)
  t.end()
})

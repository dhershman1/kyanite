import test from 'tape'
import includes from '../../src/array/includes'

test('includes -- Finds string within array', t => {
  t.same(includes('foo', ['test', 'bar', 'foo']), true)
  t.same(includes('foo', ['test', 'bar', 'baz']), false)
  t.end()
})

test('includes -- Works with strings', t => {
  t.same(includes('f', 'barfoobaz'), true)
  t.same(includes('f', 'barbaz'), false)
  t.end()
})

test('includes -- Is curried', t => {
  const fn = includes('foo')

  t.same(fn(['test', 'bar', 'foo']), true)
  t.same(fn(['test', 'bar', 'baz']), false)
  t.end()
})

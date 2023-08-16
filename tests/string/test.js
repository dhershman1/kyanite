import test from 'tape'
import fn from '../../src/string/test.js'

test('test -- Basic functionality works', t => {
  t.same(fn(/^a/, 'abc'), true)
  t.same(fn(/^b/, 'abc'), false)
  t.end()
})

test('test -- Is curried', t => {
  const f = fn(/^a/)

  t.same(f('abc'), true)
  t.same(f('bca'), false)
  t.end()
})

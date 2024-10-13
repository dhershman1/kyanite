import ensureArray from '../../src/array/ensureArray.js'
import test from 'tape'

test('ensureArray -- Basic functionality', t => {
  t.same(ensureArray([1]), [1])
  t.same(ensureArray(1), [1])
  t.same(ensureArray(), [])
  t.same(ensureArray(null), [])
  t.same(ensureArray('test'), ['test'])
  t.end()
})

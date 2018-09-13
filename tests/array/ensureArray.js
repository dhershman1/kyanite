import ensureArray from '../../src/array/ensureArray'
import test from 'tape'

test('ensureArray -- Basic functionality', t => {
  t.deepEqual(ensureArray(1), [1])
  t.deepEqual(ensureArray(), [])
  t.deepEqual(ensureArray(null), [])
  t.deepEqual(ensureArray('test'), ['test'])
  t.end()
})

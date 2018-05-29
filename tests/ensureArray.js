import ensureArray from '../src/ensureArray'
import test from 'tape'

test('Basic functionality', t => {
  t.deepEqual(ensureArray(1), [1])
  t.deepEqual(ensureArray(), [])
  t.deepEqual(ensureArray(null), [])
  t.deepEqual(ensureArray('test'), ['test'])
  t.end()
})

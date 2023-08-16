import type from '../../src/function/type.js'
import partition from '../../src/array/partition.js'
import test from 'tape'

const check = x => type(x) === 'String'

test('partition -- Basic functionality', t => {
  t.deepEqual(partition(check, []), [[], []])
  t.deepEqual(partition(check, ['foo', 'bar', 100]), [['foo', 'bar'], [100]])
  t.deepEqual(partition(check, ['foo', 'bar']), [['foo', 'bar'], []])
  t.end()
})

test('partition -- Is curried', t => {
  const part = partition(check)

  t.deepEqual(part(['foo', 'bar', 100]), [['foo', 'bar'], [100]])
  t.end()
})

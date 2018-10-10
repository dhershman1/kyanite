import type from '../../src/function/type'
import partition from '../../src/array/partition'
import test from 'tape'

test('partition -- Basic functionality', t => {
  const check = x => type(x) === 'String'

  t.deepEqual(partition(check, []), [[], []])
  t.deepEqual(partition(check, ['foo', 'bar', 100]), [['foo', 'bar'], [100]])
  t.deepEqual(partition(check, ['foo', 'bar']), [['foo', 'bar'], []])
  t.end()
})

test('partition -- Is curried', t => {
  const part = partition(x => type(x) === 'String')

  t.deepEqual(part(['foo', 'bar', 100]), [['foo', 'bar'], [100]])
  t.end()
})

import is from '../src/is'
import partition from '../src/partition'
import test from 'tape'

test('Basic functionality', t => {
  const check = is(String)

  t.deepEqual(partition(check, []), [[], []])
  t.deepEqual(partition(check, ['foo', 'bar', 100]), [['foo', 'bar'], [100]])
  t.deepEqual(partition(check, ['foo', 'bar']), [['foo', 'bar'], []])
  t.end()
})

test('Is curried', t => {
  const part = partition(is(String))

  t.deepEqual(part(['foo', 'bar', 100]), [['foo', 'bar'], [100]])
  t.end()
})

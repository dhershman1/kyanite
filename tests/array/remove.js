import remove from '../../src/array/remove'
import test from 'tape'

test('remove -- Removes from appointed index', t => {
  const result = remove(2, [0, 1, 2, 3])

  t.deepEqual(result, [0, 1, 3])
  t.end()
})

test('remove -- Can handle string based arrays', t => {
  t.deepEqual(remove(1, ['foo', 'bar']), ['foo'])
  t.end()
})

test('remove -- Is curried', t => {
  const remover = remove(2)
  const result = remover([1, 2, 3, 4])

  t.deepEqual(result, [1, 2, 4])
  t.end()
})

test('remove -- Handles indecies that do not exist', t => {
  t.same(remove(2, [1, 2]), [1, 2])
  t.end()
})

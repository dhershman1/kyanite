import insert from '../src/insert'
import test from 'tape'

test('Inserts the desired value into the array', t => {
  const results = insert(2, 'x', [1, 2, 3, 4])

  t.deepEqual(results, [1, 2, 'x', 3, 4])
  t.end()
})

test('Is curried', t => {
  const ins = insert(2, 'x')

  t.deepEqual(ins([1, 2, 3, 4]), [1, 2, 'x', 3, 4])
  t.end()
})

test('Sets the id to the current array length', t => {
  t.deepEqual(insert(-1, 'b', ['a', 'c', 'd']), ['a', 'c', 'd', 'b'])
  t.end()
})

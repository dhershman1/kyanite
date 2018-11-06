import test from 'tape'
import countBy from '../../src/array/countBy'

const numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2]
const letters = ['a', 'b', 'A', 'a', 'B', 'c']

test('countBy -- Counts out an array', t => {
  t.same(countBy(Math.floor, numbers), { '1': 3, '2': 2, '3': 1 })
  t.same(countBy(x => x.toLowerCase(), letters), { 'a': 3, 'b': 2, 'c': 1 })
  t.end()
})

test('countBy -- Is curried', t => {
  const floor = countBy(Math.floor)
  const low = countBy(x => x.toLowerCase())

  t.same(floor(numbers), { '1': 3, '2': 2, '3': 1 })
  t.same(low(letters), { 'a': 3, 'b': 2, 'c': 1 })
  t.end()
})

import juxt from '../../src/array/juxt'
import test from 'tape'

test('juxt -- Test basic functionality', t => {
  const res = juxt([Math.min, Math.max], [3, 4, 9, -3])

  t.deepEqual(res, [-3, 9])
  t.end()
})

test('juxt -- Works with a single function and a single value', t => {
  t.deepEqual(juxt([x => x + 2], [3]), [5])
  t.end()
})

test('juxt -- Works with a function and multiple values', t => {
  t.deepEqual(juxt([(x, y) => x + y], [2, 3]), [5])
  t.end()
})

test('juxt -- Works with multiple functions', t => {
  const testy = () => 5
  const thing = () => 8

  t.deepEqual(juxt([testy, thing], []), [5, 8])
  t.end()
})

test('juxt -- Works with multiple functions and a single value', t => {
  const add = x => x + 2
  const multiply = x => x * 2

  t.deepEqual(juxt([add, multiply], [2]), [4, 4])
  t.end()
})

test('juxt -- Its curried', t => {
  const add = (x, y) => x + y
  const multiply = (x, y) => x * y

  t.deepEqual(juxt([add, multiply])([2, 3]), [5, 6])
  t.end()
})

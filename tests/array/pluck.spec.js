import test from 'tape'
import pluck from '../../src/array/pluck.js'

test('pluck()', t => {
  const results = pluck('age', [{ name: 'george', age: 19 }, { name: 'gavin', age: 26 }])

  t.same(results, [19, 26])
  t.same(pluck(0, [[1, 2], [3, 4]]), [1, 3])
  t.end()
})

test('pluck() is curried', t => {
  const fn = pluck('age')

  t.same(fn([{ name: 'george', age: 19 }, { name: 'gavin', age: 26 }]), [19, 26])
  t.end()
})

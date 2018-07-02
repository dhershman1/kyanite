import ascendBy from '../../src/array/ascendBy'
import descendBy from '../../src/array/descendBy'
import sortWith from '../../src/array/sortWith'
import test from 'tape'

test('Falls back to secondary functions to break ties', t => {
  const data = [{ name: 'alice', age: 40 }, { name: 'bob', age: 30 }, { name: 'clara', age: 40 }]

  const results = sortWith([
    descendBy(x => x.age),
    ascendBy(x => x.name)
  ], data)

  t.same(results, [{ name: 'alice', age: 40 }, { name: 'clara', age: 40 }, { name: 'bob', age: 30 }])
  t.end()
})

test('Is also curried', t => {
  const data = [{ name: 'alice', age: 40 }, { name: 'bob', age: 30 }, { name: 'clara', age: 40 }]
  const nameAgeSort = sortWith([
    descendBy(x => x.age),
    ascendBy(x => x.name)
  ])
  const results = nameAgeSort(data)

  t.same(results, [{ name: 'alice', age: 40 }, { name: 'clara', age: 40 }, { name: 'bob', age: 30 }])
  t.end()
})

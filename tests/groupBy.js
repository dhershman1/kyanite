import groupBy from '../src/groupBy'
import test from 'tape'

test('Grouped similar number values', t => {
  const results = groupBy(Math.floor, [4.2, 6.1, 6.4])

  t.same(results, { '4': [4.2], '6': [6.1, 6.4] })
  t.end()
})

test('Groups similar string values', t => {
  const results = groupBy(x => x === 'test', ['val', 'test', 'test', 'other', 'val'])

  t.same(results, { false: ['val', 'other', 'val'], true: ['test', 'test'] })
  t.end()
})

test('It is curried', t => {
  const g = groupBy(Math.floor)
  const results = g([4.2, 6.1, 6.4])

  t.same(results, { '4': [4.2], '6': [6.1, 6.4] })
  t.end()
})

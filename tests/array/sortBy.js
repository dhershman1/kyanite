import sortBy from '../../src/array/sortBy.js'
import test from 'tape'

test('sortBy -- Sorts using provided function', t => {
  const results = sortBy(x => x.name, [
    { name: 'bob' },
    { name: 'amanda' },
    { name: 'carl' },
    { name: 'amanda' }
  ])

  t.same(results, [
    { name: 'amanda' },
    { name: 'amanda' },
    { name: 'bob' },
    { name: 'carl' }
  ])
  t.end()
})

test('sortBy -- Is curried', t => {
  const sb = sortBy(x => x.name)
  const results = sb([
    { name: 'bob' },
    { name: 'amanda' },
    { name: 'carl' },
    { name: 'amanda' }
  ])

  t.same(results, [{ name: 'amanda' }, { name: 'amanda' }, { name: 'bob' }, { name: 'carl' }])
  t.end()
})

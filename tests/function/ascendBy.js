import ascendBy from '../../src/function/ascendBy.js'
import test from 'tape'

test('ascendBy -- Properly decends using the desired function', t => {
  const results = [
    { name: 'bob' },
    { name: 'amanda' },
    { name: 'carl' },
    { name: 'amanda' }
  ].sort(ascendBy(x => x.name))

  t.same(results, [
    { name: 'amanda' },
    { name: 'amanda' },
    { name: 'bob' },
    { name: 'carl' }
  ])
  t.end()
})

test('ascendBy -- Is curried', t => {
  const asc = ascendBy(x => x.name)
  const results = [
    { name: 'bob' },
    { name: 'amanda' },
    { name: 'carl' },
    { name: 'amanda' }
  ].sort(asc)

  t.ok(results)
  t.same(results, [
    { name: 'amanda' },
    { name: 'amanda' },
    { name: 'bob' },
    { name: 'carl' }
  ])
  t.end()
})

import ascendBy from '../../src/function/ascendBy'
import test from 'tape'

test('Properly decends using the desired function', t => {
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

test('Is curried', t => {
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


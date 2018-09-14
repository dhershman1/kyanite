import descendBy from '../../src/function/descendBy'
import test from 'tape'

test('descendBy -- Properly decends using the desired function', t => {
  const results = [
    { name: 'bob' },
    { name: 'amanda' },
    { name: 'carl' },
    { name: 'amanda' }
  ].sort(descendBy(x => x.name))

  t.same(results, [
    { name: 'carl' },
    { name: 'bob' },
    { name: 'amanda' },
    { name: 'amanda' }
  ])
  t.end()
})

test('descendBy -- Is curried', t => {
  const desc = descendBy(x => x.name)
  const results = [
    { name: 'bob' },
    { name: 'amanda' },
    { name: 'carl' },
    { name: 'amanda' }
  ].sort(desc)

  t.same(results, [
    { name: 'carl' },
    { name: 'bob' },
    { name: 'amanda' },
    { name: 'amanda' }
  ])
  t.end()
})

import branch from '../../src/function/branch'
import test from 'tape'

test('Branches truthy', t => {
  const results = branch(
    x => x < 10,
    x => x + 1,
    x => x - 1,
    0
  )

  t.same(results, 1)
  t.end()
})

test('Branches falsy', t => {
  const results = branch(
    x => x < 10,
    x => x + 1,
    x => x - 1,
    10
  )

  t.same(results, 9)
  t.end()
})

test('Is curried', t => {
  const b = branch(
    x => x < 10,
    x => x + 1,
    x => x - 1
  )

  t.same(b(0), 1)
  t.same(b(10), 9)
  t.end()
})

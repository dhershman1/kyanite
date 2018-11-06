import branch from '../../src/function/branch'
import test from 'tape'

test('branch -- Branches truthy', t => {
  const results = branch(
    x => x < 10,
    x => x + 1,
    x => x - 1,
    0
  )

  t.same(results, 1)
  t.end()
})

test('branch -- Branches falsy', t => {
  const results = branch(
    x => x < 10,
    x => x + 1,
    x => x - 1,
    10
  )

  t.same(results, 9)
  t.end()
})

test('branch -- Is curried', t => {
  const b = branch(
    x => x < 10,
    x => x + 1,
    x => x - 1
  )

  t.same(b(0), 1)
  t.same(b(10), 9)
  t.end()
})

test('branch -- break down curried', t => {
  const fn = branch(x => x < 10)
  const fn2 = fn(x => x + 1, x => x - 1)

  t.same(fn2(0), 1)
  t.same(fn2(10), 9)
  t.end()
})

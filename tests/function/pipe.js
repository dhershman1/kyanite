import add from '../../src/number/add.js'
import multiply from '../../src/number/multiply.js'
import pipe from '../../src/function/pipe.js'
import when from '../../src/function/when.js'
import eq from '../../src/function/eq.js'
import compose from '../../src/function/compose.js'
import reduced from '../../src/function/reduced.js'
import test from 'tape'

test('pipe -- Returns value after running pipe', t => {
  t.is(pipe([
    add(2),
    multiply(2)
  ], 10), 24)
  t.end()
})

test('pipe -- Is curried', t => {
  const piper = pipe([add(2), multiply(2)])

  t.is(piper(10), 24)
  t.end()
})

test('pipe -- Handles customized functions', t => {
  const custom = pipe([x => x + 1, x => x * 2])

  t.same([1, 2, 3].map(custom), [4, 6, 8])
  t.same([3, 4, 5].map(custom), [8, 10, 12])
  t.same([10, 11, 12].map(custom), [22, 24, 26])
  t.end()
})

test('pipe -- Does not repeat calls', t => {
  let count = 0
  const custom = pipe([x => {
    count++
    return x + 1
  }, x => {
    count++
    return x * 2
  }])

  custom(1)

  t.same(count, 2)
  t.end()
})

test('pipe -- Supports short circuiting', t => {
  const done = compose(reduced)
  const list = ['a', 'b', 'c', 'd']
  const counts = {}
  const piper = pipe([
    when(eq('a'), done(x => {
      counts.a = (counts.a || 0) + 1
      return x + 1
    })),
    when(eq('b'), done(x => {
      counts.b = (counts.b || 0) + 1
      return x + 1
    })),
    when(eq('c'), done(x => {
      counts.c = (counts.c || 0) + 1
      return x + 1
    }))
  ])
  const results = list.map(piper)

  t.same(results, ['a1', 'b1', 'c1', 'd'])
  t.same(counts, { a: 1, b: 1, c: 1 })
  t.end()
})

import test from 'tape'
import cond from '../../src/function/cond.js'

function eq (a) {
  return b => a === b
}

function always (a) {
  return () => a
}

function T () {
  return true
}

test('cond() basics', t => {
  const results = cond([
    [eq(1), always('It is a one!')],
    [eq(2), always('It is a two!')],
    [T, always('It was nothing special')]
  ], 1)

  t.same('It is a one!', results, 'Hit first condition')
  t.end()
})

test('cond() is curried', t => {
  const fn = cond([
    [eq(1), always('It is a one!')],
    [eq(2), always('It is a two!')],
    [T, always('It was nothing special')]
  ])

  t.same(fn(1), 'It is a one!', 'Hit first condition')
  t.same(fn(2), 'It is a two!', 'Hit second condition')
  t.same(fn(3), 'It was nothing special', 'Hit third condition')
  t.end()
})

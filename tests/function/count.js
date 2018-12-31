import test from 'tape'
import count from '../../src/function/count'

test('count -- Counts Array', t => {
  t.same(count([1, 2, 3]), 3)
  t.same(count([1]), 1)
  t.same(count([]), 0)
  t.end()
})

test('count -- Counts Objects', t => {
  t.same(count({ a: 1, b: 2, c: 3 }), 3)
  t.same(count({ a: 1 }), 1)
  t.same(count({}), 0)
  t.end()
})

test('count -- Counts Strings', t => {
  t.same(count('coolkid'), 7)
  t.same(count('quick brown fox'), 15)
  t.same(count(''), 0)
  t.end()
})

test('count -- Counts Maps', t => {
  t.same(count(new Map([['a', 1], ['b', 2], ['c', 3]])), 3)
  t.same(count(new Map([['a', 1]])), 1)
  t.same(count(new Map()), 0)
  t.end()
})

test('count -- Counts Sets', t => {
  t.same(count(new Set([1, 2, 3])), 3)
  t.same(count(new Set([1])), 1)
  t.same(count(new Set()), 0)
  t.end()
})

test('count -- Handle numbers', t => {
  try {
    count(9)
  } catch ({ message }) {
    t.same(message, 'Unexpected type given to count: Number')
    t.end()
  }
})

test('count -- Handle dates', t => {
  try {
    count(new Date())
  } catch ({ message }) {
    t.same(message, 'Unexpected type given to count: Date')
    t.end()
  }
})

test('count -- Handle Regex', t => {
  try {
    count(new RegExp())
  } catch ({ message }) {
    t.same(message, 'Unexpected type given to count: RegExp')
    t.end()
  }
})

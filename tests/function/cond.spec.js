import { test } from 'node:test'
import assert from 'node:assert/strict'
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

test('cond() basics', () => {
  const results = cond([
    [eq(1), always('It is a one!')],
    [eq(2), always('It is a two!')],
    [T, always('It was nothing special')]
  ], 1)

  assert.deepEqual('It is a one!', results, 'Hit first condition')
})

test('cond() is curried', () => {
  const fn = cond([
    [eq(1), always('It is a one!')],
    [eq(2), always('It is a two!')],
    [T, always('It was nothing special')]
  ])

  assert.deepEqual(fn(1), 'It is a one!', 'Hit first condition')
  assert.deepEqual(fn(2), 'It is a two!', 'Hit second condition')
  assert.deepEqual(fn(3), 'It was nothing special', 'Hit third condition')
})

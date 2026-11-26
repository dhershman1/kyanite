import { test } from 'node:test'
import assert from 'node:assert/strict'
import pick from '../../src/object/pick.js'

test('pick -- picks the requested keys', () => {
  const results = pick(['a', 'd'], {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  })

  assert.deepEqual(results, { a: 1, d: 4 })
})

test('pick -- picks only the requested keys', () => {
  const results = pick(['a', 'e', 'f'], {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  })

  assert.deepEqual(results, { a: 1 })
})

test('pick -- is curried', () => {
  const picker = pick(['a', 'd'])

  assert.deepEqual(picker({ a: 1, b: 2, c: 3, d: 4 }), { a: 1, d: 4 })
  assert.deepEqual(picker({ a: 1, b: 2, c: 3 }), { a: 1 })
})

import first from '../../src/list/first.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('first -- test first() Array functionality', () => {
  const list = [1, 2, 3, 4]

  assert.equal(first(list), 1)
})

test('first -- test first() String functionality', () => {
  const str = 'abcd'

  assert.equal(first(str), 'a')
})

import last from '../../src/list/last.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('last -- Array functionality', () => {
  const list = [1, 2, 3, 4]

  assert.equal(last(list), 4)
})

test('last -- String functionality', () => {
  const str = 'abcd'

  assert.equal(last(str), 'd')
})

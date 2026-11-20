import split from '../../src/string/split.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('split -- Basic capabilities', () => {
  assert.deepEqual(split('', 'abc'), ['a', 'b', 'c'])
})

test('split -- Is curried', () => {
  const sp = split('')

  assert.deepEqual(sp('abc'), ['a', 'b', 'c'])
})

import { test } from 'node:test'
import assert from 'node:assert/strict'
import toLower from '../../src/string/toLower.js'

test('toLower -- Transforms provided string', () => {
  assert.equal(toLower('HI'), 'hi')
  assert.equal(toLower('TEST.123.HELLO'), 'test.123.hello')
})

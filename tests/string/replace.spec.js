import { test } from 'node:test'
import assert from 'node:assert/strict'
import replace from '../../src/string/replace.js'

test('replace -- Replaces a string value', () => {
  assert.equal(replace('foo', 'bar', 'foofoo'), 'barfoo')
  assert.equal(replace(/foo/g, 'bar', 'foofoo'), 'barbar')
})

test('replace -- Is curried', () => {
  const fn = replace('foo')
  const fn2 = fn('bar')

  assert.equal(fn2('foofoo'), 'barfoo')
  assert.equal(fn('baz', 'foofoo'), 'bazfoo')
})

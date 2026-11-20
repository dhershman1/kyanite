import encase from '../../src/function/encase.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

const getter = x => x.a.b.c

test('encase -- Encases the function and returns undefined if fails', () => {
  const results = encase(getter, { a: 0 })

  assert.ok(!results)
  assert.deepEqual(results, undefined)
})

test('encase -- Encases the function and returns the functions returned value', () => {
  const results = encase(getter, { a: { b: { c: 0 } } })

  assert.deepEqual(results, 0)
})

test('encase -- Is curried', () => {
  const en = encase(getter)

  assert.deepEqual(en({ a: 0 }), undefined)
  assert.deepEqual(en({ a: { b: { c: 0 } } }), 0)
})

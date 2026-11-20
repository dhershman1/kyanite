import sift from '../../src/object/sift.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('sift -- Properly filters out desired properties', () => {
  const results = sift(x => typeof x === 'string', {
    id: 4,
    thing: 'test',
    other: 'cool'
  })

  assert.deepEqual(results, {
    other: 'cool',
    thing: 'test'
  })
})

test('sift -- Properly removes emptied values based on function', () => {
  const results = sift(x => x.length, {
    h422dcr4: [],
    frtcsq1231: ['hello'],
    dyuem009: [],
    '098ikdnsh': ['test']
  })

  assert.deepEqual(results, {
    frtcsq1231: ['hello'],
    '098ikdnsh': ['test']
  })
})

test('sift -- Is Curried', () => {
  const sifter = sift(x => typeof x === 'string')

  assert.deepEqual(sifter({
    id: 4,
    thing: 'test',
    other: 'cool'
  }), {
    other: 'cool',
    thing: 'test'
  })
})

import { test } from 'node:test'
import assert from 'node:assert/strict'
import addIndex from '../../src/function/addIndex.js'
import map from '../../src/array/map.js'
import filter from '../../src/array/filter.js'
import reduce from '../../src/function/reduce.js'

const data = ['f', 'o', 'o', 'b', 'a', 'r']

test('addIndex -- Basic 2 argument functionality', () => {
  const m = addIndex(map)
  const f = addIndex(filter)

  assert.deepEqual(m((x, i) => `${x}-${i}`, data), ['f-0', 'o-1', 'o-2', 'b-3', 'a-4', 'r-5'])
  assert.deepEqual(f((_, i) => i > 2, data), ['b', 'a', 'r'])
})

test('addIndex -- Reduce 3 argument functionality', () => {
  const fn = addIndex(reduce)

  assert.deepEqual(fn((val, acc, i) => acc.concat(val + i), [], data), ['f0', 'o1', 'o2', 'b3', 'a4', 'r5'])
})

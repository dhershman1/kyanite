import reverse from '../../src/list/reverse.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('reverse -- Returns reversed array', () => {
  assert.deepEqual(reverse([1, 2, 3]), [3, 2, 1])
  assert.deepEqual(reverse('abc'), 'cba')
})

test('reverse -- Returns empty array when given an empty array', () => {
  assert.deepEqual(reverse([]), [])
  assert.deepEqual(reverse(''), '')
})

test('reverse -- Does not mutate original array', () => {
  const x = [1, 2, 3]

  assert.deepEqual(reverse(x), [3, 2, 1])
  assert.deepEqual(x, x)
})

import round from '../../src/number/round.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('round -- Returns value with no round up or down', () => {
  assert.equal(round(2, 112.332), 112.33)
})

test('round -- Returns value rounded up', () => {
  assert.equal(round(2, 112.335), 112.34)
})

test('round -- Is curried', () => {
  const rounder = round(2)

  assert.equal(rounder(112.445), 112.45)
})

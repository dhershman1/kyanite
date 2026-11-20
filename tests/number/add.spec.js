import add from '../../src/number/add.js'
import { test } from 'node:test'
import assert from 'node:assert/strict'

test('add -- Adds two numbers together', () => {
  assert.equal(add(1, 2), 3)
})

test('add -- Acts like a normal concat if value is a string', () => {
  assert.equal(add(1, '2'), '12')
  assert.equal(add('1', '10'), '110')
})

test('add -- Is curried', () => {
  const adder = add(3)

  assert.equal(adder(4), 7)
})

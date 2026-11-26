import { test } from 'node:test'
import assert from 'node:assert/strict'
import composeP from '../../src/function/composeP.js'

const foo = a => new Promise(resolve => resolve(a + '123'))
const bar = a => new Promise(resolve => resolve(a + '555'))

test('composeP -- Handles basic functionality', async () => {
  assert.equal(await composeP(bar, foo, '100'), '100123555')
})

test('composeP -- Is curried', async () => {
  const fn = composeP(bar, foo)

  assert.equal(await fn('100'), '100123555')
})

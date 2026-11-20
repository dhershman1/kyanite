import { test } from 'node:test'
import assert from 'node:assert/strict'
import pipeP from '../../src/function/pipeP.js'

const foo = a => new Promise(resolve => resolve(a + '123'))
const bar = a => new Promise(resolve => resolve(a + '555'))

test('pipeP -- Basic functionality', async () => {
  assert.equal(await pipeP([foo, bar], '100'), '100123555')
})

test('pipeP -- Handles async functions', async () => {
  const asyncAdd = a => new Promise(resolve => resolve(a + 1))
  const asyncMult = a => new Promise(resolve => resolve(a * 2))

  assert.equal(await pipeP([asyncAdd, asyncMult], 10), 22)
})

test('pipeP -- Is curried', async () => {
  const fn = pipeP([foo, bar])

  assert.equal(await fn('100'), '100123555')
})

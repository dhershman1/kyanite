import { test } from 'node:test'
import assert from 'node:assert/strict'
import memoizeWith from '../../src/function/memoizeWith.js'

test('memoizeWith - basic functionality', (t) => {
  const add = (a, b) => a + b
  const memoizedAdd = memoizeWith((a, b) => `${a}-${b}`, add)

  assert.equal(memoizedAdd(1, 2), 3, '1 + 2 should equal 3')
  assert.equal(memoizedAdd(1, 2), 3, '1 + 2 should equal 3 (cached)')
  assert.equal(memoizedAdd(2, 3), 5, '2 + 3 should equal 5')
  assert.equal(memoizedAdd(2, 3), 5, '2 + 3 should equal 5 (cached)')
})

test('memoizeWith - cache functionality', (t) => {
  let callCount = 0
  const add = (a, b) => {
    callCount++
    return a + b
  }
  const memoizedAdd = memoizeWith((a, b) => `${a}-${b}`, add)

  memoizedAdd(1, 2)
  memoizedAdd(1, 2)
  memoizedAdd(2, 3)
  memoizedAdd(2, 3)

  assert.equal(callCount, 2, 'Function should be called twice due to caching')
})

test('memoizeWith - is curried', () => {
  let callCount = 0
  const add = (a, b) => {
    callCount++
    return a + b
  }
  const memoizedAdd = memoizeWith((a, b) => `${a}-${b}`)(add)

  memoizedAdd(1, 2)
  memoizedAdd(1, 2)
  memoizedAdd(2, 3)
  memoizedAdd(2, 3)

  assert.equal(callCount, 2, 'Function should be called twice due to caching')
})

test('memoizeWith - calculates the value for a given input only once', () => {
  let callCount = 0
  const add = (a, b) => {
    callCount++
    return a + b
  }
  const memoizedAdd = memoizeWith((a, b) => `${a}-${b}`, add)

  memoizedAdd(1, 2)
  memoizedAdd(1, 2)
  memoizedAdd(1, 2)
  memoizedAdd(1, 2)

  assert.equal(callCount, 1, 'Function should be called once due to caching')
})

test('memoizeWith - handles multiple arguments', () => {
  let callCount = 0
  const add = (...args) => {
    callCount++
    return args.reduce((acc, val) => acc + val, 0)
  }
  const memoizedAdd = memoizeWith((...args) => args.join('-'), add)

  memoizedAdd(1, 2, 3)
  memoizedAdd(1, 2, 3)
  memoizedAdd(1, 2, 3)
  memoizedAdd(1, 2, 3)

  assert.equal(callCount, 1, 'Function should be called once due to caching')
})

test('memozieWith - can be applied to a nullary function', () => {
  let callCount = 0
  const get = () => {
    callCount++
    return 'value'
  }
  const memoizedGet = memoizeWith(() => 'key', get)

  assert.equal(memoizedGet(), 'value', 'Function should return the correct value')
  assert.equal(memoizedGet(), 'value', 'Function should return the correct value')
  assert.equal(memoizedGet(), 'value', 'Function should return the correct value')
  assert.equal(callCount, 1, 'Function should be called once due to caching')
})

test('memoizeWith - can be applied to a function with optional arguments', () => {
  let callCount = 0
  const add = (a, b = 0) => {
    callCount++
    return a + b
  }
  const memoizedAdd = memoizeWith((a, b) => `${a}-${b}`, add)

  memoizedAdd(1)
  memoizedAdd(1)
  memoizedAdd(1, 2)
  memoizedAdd(1, 2)

  assert.equal(callCount, 2, 'Function should be called twice due to caching')
})

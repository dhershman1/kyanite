import test from 'tape'
import memoizeWith from '../../src/function/memoizeWith.js'

test('memoizeWith - basic functionality', (t) => {
  const add = (a, b) => a + b
  const memoizedAdd = memoizeWith((a, b) => `${a}-${b}`, add)

  t.equal(memoizedAdd(1, 2), 3, '1 + 2 should equal 3')
  t.equal(memoizedAdd(1, 2), 3, '1 + 2 should equal 3 (cached)')
  t.equal(memoizedAdd(2, 3), 5, '2 + 3 should equal 5')
  t.equal(memoizedAdd(2, 3), 5, '2 + 3 should equal 5 (cached)')

  t.end()
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

  t.equal(callCount, 2, 'Function should be called twice due to caching')

  t.end()
})

test('memoizeWith - calculates the value for a given input only once', t => {
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

  t.equal(callCount, 1, 'Function should be called once due to caching')

  t.end()
})

test('memoizeWith - handles multiple arguments', t => {
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

  t.equal(callCount, 1, 'Function should be called once due to caching')

  t.end()
})

test('memozieWith - can be applied to a nullary function', t => {
  let callCount = 0
  const get = () => {
    callCount++
    return 'value'
  }
  const memoizedGet = memoizeWith(() => 'key', get)

  t.equal(memoizedGet(), 'value', 'Function should return the correct value')
  t.equal(memoizedGet(), 'value', 'Function should return the correct value')
  t.equal(memoizedGet(), 'value', 'Function should return the correct value')
  t.equal(callCount, 1, 'Function should be called once due to caching')

  t.end()
})

test('memoizeWith - can be applied to a function with optional arguments', t => {
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

  t.equal(callCount, 2, 'Function should be called twice due to caching')

  t.end()
})

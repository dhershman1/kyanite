import isEqual from '../../src/function/isEqual'
import test from 'tape'

/* eslint-disable no-new-wrappers */

test('isEqual -- Compares Promise objects by identity', t => {
  const p1 = Promise.resolve(42)
  const p2 = Promise.resolve(42)

  t.notOk(isEqual(p1, p2), 'Different Promises should not equal')
  t.ok(isEqual(p1, p1), 'Same Promise objects are equal by memory')
  t.end()
})

test('isEqual -- Handles number types nicely', t => {
  const q = 1

  t.true(isEqual(1, 1))
  t.true(isEqual(1, q))
  t.true(isEqual(q, q))
  t.false(isEqual(1, 2))
  t.false(isEqual(1, '1'))
  t.end()
})

test('isEqual -- Handles string types nicely', t => {
  const q = 'hi'

  t.true(isEqual('hi', 'hi'))
  t.true(isEqual('hi', q))
  t.true(isEqual(q, q))
  t.false(isEqual('hi', 'bye'))
  t.false(isEqual('hi', 1))
  t.end()
})

test('isEqual -- Handles boolean types nicely', t => {
  const q = true

  t.true(isEqual(true, true))
  t.true(isEqual(true, q))
  t.true(isEqual(q, q))
  t.true(isEqual(false, false))
  t.false(isEqual(true, false))
  t.false(isEqual(true, 1))
  t.false(isEqual(false, 0))
  t.end()
})

test('isEqual -- Test handles regex', t => {
  t.ok(isEqual(/\s/, /\s/), 'handles whitespace regex')
  t.ok(isEqual(/a/gi, /a/gi), 'handles flags')
  t.ok(isEqual(/a/mgi, /a/img), 'handles mixed flags')
  t.ok(isEqual(/[A-Z]/, new RegExp('[A-Z]')), 'Regex is generated the same so they are equal')
  t.notOk(isEqual(/\s/, /\d/), 'whitespace regex is not equal to digit regex')
  t.notOk(isEqual(/a/gi, /a/i), 'Handles not equal flags')
  t.end()
})

test('isEqual -- Test boolean primitive do not equal boolean objects', t => {
  t.notOk(isEqual(true, new Boolean(true)), 'true is not equal to object true')
  t.notOk(isEqual(false, new Boolean(false)), 'flase is not equal to object false')
  t.end()
})

test('isEqual -- Test String primitive do not equal String objects', t => {
  t.notOk(isEqual('test', new String('test')), 'String is not equal to Object String')
  t.end()
})

test('isEqual -- Test Number primitive do not equal Number objects', t => {
  t.notOk(isEqual(5, new Number(5)), 'Number is not equal to Object Number')
  t.end()
})

test('isEqual -- Handles Object types nicely', t => {
  const q = { a: 1 }

  t.same(isEqual({}, {}), true, 'Empty Objects are equal')
  t.same(isEqual({ a: 1 }, { a: 1 }), true, 'Identical Objects are equal')
  t.same(isEqual({ a: 1 }, q), true, 'Object compared to var of same object are equal')
  t.same(isEqual(q, q), true, 'Object var compared against itself is equal')
  t.same(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 }), true, 'Stacked Object is equal')
  t.same(isEqual({ a: 1, b: 2 }, { b: 2, a: 1 }), true, 'Stacked but switched object is equal')
  t.same(isEqual({ 'a': 1 }, { a: 1 }), true)
  t.same(isEqual({}, { a: 1 }), false)
  t.same(isEqual({}, { b: 2 }), false)
  t.same(isEqual({ a: 1 }, { a: '1' }), false)
  t.same(isEqual({ a: 1 }, { b: 1 }), false)
  t.same(isEqual({ a: 1, b: 2 }, { a: 2, b: 1 }), false)
  t.same(isEqual({ a: 1, b: 2 }, { b: 1, a: 2 }), false)
  t.end()
})

test('isEqual -- Handles array types nicely', t => {
  const q = []

  t.same(isEqual([], []), true, 'Empty array is equal to empty array')
  t.same(isEqual([1], [1]), true, 'Single index array with same number are equal')
  t.same(isEqual([1, 2], [1, 2]), true, 'Multi index arrays equal')
  t.same(isEqual(q, []), true, 'Variable empty array equal to empty array')
  t.same(isEqual(q, q), true, 'Variable array equal to variable array')
  t.same(isEqual([1], []), false, 'Single index array not equal to empty array')
  t.same(isEqual([1, 2], [2, 1]), false, 'Out of order arrays are not equal')
  t.same(isEqual([1, 3], [1, 2]), false, 'Different valued arrays are not equal')
  t.same(isEqual([1], q), false, 'Single index array not equal to empty variable array')
  t.end()
})

test('isEqual -- Handles date objects nicely', t => {
  t.same(isEqual(new Date(), new Date()), true, 'Current Date is equal to current date')
  t.same(isEqual(new Date('12/14/1992'), new Date('12/14/1992')), true, 'Statically set dates are equal')
  t.same(isEqual(new Date('09/14/1992'), new Date('09/14/2018')), false, 'Different year dates not equal')
  t.end()
})

test('isEqual -- Handles nested objects nicely', t => {
  const q = { a: 1 }

  t.same(isEqual({ q }, { q }), true, 'Single nested object')
  t.same(isEqual({ a: { q } }, { a: { q } }), true, 'Double nested object')
  t.end()
})

test('isEqual -- Handles more complex object combinations', t => {
  const q = {
    a: [1]
  }

  t.same(isEqual(q, q), true, 'Object with array is equal')
  t.same(isEqual({
    a: [{
      b: 1
    }]
  }, {
    a: [{
      b: 1
    }]
  }), true, 'Overly complex data is equal')
  t.end()
})

import { test } from 'node:test'
import assert from 'node:assert/strict'
import somePass from '../../src/array/somePass.js'
import compose from '../../src/function/compose.js'
import eq from '../../src/function/eq.js'
import prop from '../../src/object/prop.js'

const propEq = (p, v) => compose(eq(v), prop(p))
const isClub = propEq('suit', '♣')
const isSpade = propEq('suit', '♠')

test('somePass -- Handles basic data', () => {
  assert.deepEqual(somePass([x => x > 2, x => x < 4], 3), true)
  assert.deepEqual(somePass([x => x > 0, x => x < 3], 5), true)
  assert.deepEqual(somePass([x => x > 5, x => x < 8], 5), true)
  assert.deepEqual(somePass([x => x === 2, x => x === 4], 5), false)
})

test('somePass -- More complex data set', () => {
  assert.deepEqual(somePass([isClub, isSpade], { rank: '10', suit: '♣' }), true)
  assert.deepEqual(somePass([isClub, isSpade], { rank: 'Q', suit: '♠' }), true)
  assert.deepEqual(somePass([isClub, isSpade], { rank: 'Q', suit: '♦' }), false)
})

test('somePass -- Is curried', () => {
  const simple = somePass([x => x === 2, x => x === 4])
  const complex = somePass([isClub, isSpade])

  assert.deepEqual(simple(2), true)
  assert.deepEqual(simple(4), true)
  assert.deepEqual(simple(5), false)
  assert.deepEqual(complex({ rank: '10', suit: '♣' }), true)
  assert.deepEqual(complex({ rank: 'Q', suit: '♠' }), true)
  assert.deepEqual(complex({ rank: 'Q', suit: '♦' }), false)
})

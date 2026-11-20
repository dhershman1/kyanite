import { test } from 'node:test'
import assert from 'node:assert/strict'
import everyPass from '../../src/array/everyPass.js'
import propEq from '../../src/object/propEq.js'

// const propEq = (p, v) => compose(eq(v), prop(p))
const isClub = propEq('suit', '♣')
const isSpade = propEq('suit', '♠')

test('everyPass -- Handles basic data', () => {
  assert.deepEqual(everyPass([x => x > 2, x => x < 4], 3), true)
  assert.deepEqual(everyPass([x => x > 0, x => x < 3], 5), false)
  assert.deepEqual(everyPass([x => x > 5, x => x < 8], 5), false)
  assert.deepEqual(everyPass([x => x === 2, x => x === 4], 5), false)
})

test('everyPass -- More complex data set', () => {
  assert.deepEqual(everyPass([isClub], { rank: '10', suit: '♣' }), true)
  assert.deepEqual(everyPass([isClub, isSpade], { rank: '10', suit: '♣' }), false)
  assert.deepEqual(everyPass([isClub, isSpade], { rank: 'Q', suit: '♠' }), false)
  assert.deepEqual(everyPass([isClub, isSpade], { rank: 'Q', suit: '♦' }), false)
})

test('everyPass -- Is curried', () => {
  const simple = everyPass([x => x >= 2, x => x <= 4])
  const complex = everyPass([isClub])

  assert.deepEqual(simple(2), true)
  assert.deepEqual(simple(4), true)
  assert.deepEqual(simple(5), false)
  assert.deepEqual(complex({ rank: '10', suit: '♣' }), true)
  assert.deepEqual(complex({ rank: 'Q', suit: '♠' }), false)
  assert.deepEqual(complex({ rank: 'Q', suit: '♦' }), false)
})

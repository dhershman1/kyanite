import test from 'tape'
import everyPass from '../../src/array/everyPass.js'
import propEq from '../../src/object/propEq.js'

// const propEq = (p, v) => compose(eq(v), prop(p))
const isClub = propEq('suit', '♣')
const isSpade = propEq('suit', '♠')

test('everyPass -- Handles basic data', t => {
  t.same(everyPass([x => x > 2, x => x < 4], 3), true)
  t.same(everyPass([x => x > 0, x => x < 3], 5), false)
  t.same(everyPass([x => x > 5, x => x < 8], 5), false)
  t.same(everyPass([x => x === 2, x => x === 4], 5), false)
  t.end()
})

test('everyPass -- More complex data set', t => {
  t.same(everyPass([isClub], { rank: '10', suit: '♣' }), true)
  t.same(everyPass([isClub, isSpade], { rank: '10', suit: '♣' }), false)
  t.same(everyPass([isClub, isSpade], { rank: 'Q', suit: '♠' }), false)
  t.same(everyPass([isClub, isSpade], { rank: 'Q', suit: '♦' }), false)
  t.end()
})

test('everyPass -- Is curried', t => {
  const simple = everyPass([x => x >= 2, x => x <= 4])
  const complex = everyPass([isClub])

  t.same(simple(2), true)
  t.same(simple(4), true)
  t.same(simple(5), false)
  t.same(complex({ rank: '10', suit: '♣' }), true)
  t.same(complex({ rank: 'Q', suit: '♠' }), false)
  t.same(complex({ rank: 'Q', suit: '♦' }), false)
  t.end()
})

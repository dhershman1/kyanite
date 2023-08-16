import test from 'tape'
import somePass from '../../src/array/somePass.js'
import compose from '../../src/function/compose.js'
import eq from '../../src/function/eq.js'
import prop from '../../src/object/prop.js'

const propEq = (p, v) => compose(eq(v), prop(p))
const isClub = propEq('suit', '♣')
const isSpade = propEq('suit', '♠')

test('somePass -- Handles basic data', t => {
  t.same(somePass([x => x > 2, x => x < 4], 3), true)
  t.same(somePass([x => x > 0, x => x < 3], 5), true)
  t.same(somePass([x => x > 5, x => x < 8], 5), true)
  t.same(somePass([x => x === 2, x => x === 4], 5), false)
  t.end()
})

test('somePass -- More complex data set', t => {
  t.same(somePass([isClub, isSpade], { rank: '10', suit: '♣' }), true)
  t.same(somePass([isClub, isSpade], { rank: 'Q', suit: '♠' }), true)
  t.same(somePass([isClub, isSpade], { rank: 'Q', suit: '♦' }), false)
  t.end()
})

test('somePass -- Is curried', t => {
  const simple = somePass([x => x === 2, x => x === 4])
  const complex = somePass([isClub, isSpade])

  t.same(simple(2), true)
  t.same(simple(4), true)
  t.same(simple(5), false)
  t.same(complex({ rank: '10', suit: '♣' }), true)
  t.same(complex({ rank: 'Q', suit: '♠' }), true)
  t.same(complex({ rank: 'Q', suit: '♦' }), false)
  t.end()
})

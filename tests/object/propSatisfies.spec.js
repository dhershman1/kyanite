import test from 'tape'
import propSatisfies from '../../src/object/propSatisfies.js'

test('propSatisfies -- Basic', t => {
  t.same(propSatisfies(x => x > 0, 'x', { x: 1, y: 2 }), true)
  t.same(propSatisfies(y => y > 0, 'y', { x: 1, y: 4 }), true)
  t.same(propSatisfies(y => y > 0, 'b', { a: 3 }), false)
  t.end()
})

test('propSatisfies -- Is curries', t => {
  const fn = propSatisfies(y => y > 0)
  const safetyProp = fn('y')

  t.same(fn('x', { x: 1 }), true)
  t.same(fn('x', { a: 1 }), false)
  t.same(safetyProp({ x: 1, y: 4 }), true)
  t.same(safetyProp({ a: 1, b: 2 }), false)
  t.end()
})

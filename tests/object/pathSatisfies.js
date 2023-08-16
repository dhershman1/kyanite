import test from 'tape'
import pathSatisfies from '../../src/object/pathSatisfies.js'

test('pathSatisfies -- Handles objects', t => {
  t.same(pathSatisfies(y => y > 0, ['x', 'y'], { x: { y: 2 } }), true)
  t.same(pathSatisfies(y => y > 0, ['a', 'b', 'c'], { a: 3 }), false)
  t.end()
})

test('pathSatisfies -- is curried', t => {
  const safetyPath = pathSatisfies(y => y > 0, ['x', 'y'])

  t.same(safetyPath({ x: { y: 2 } }), true)
  t.same(safetyPath({ a: { y: 2 } }), false)
  t.end()
})

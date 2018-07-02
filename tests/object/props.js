import props from '../../src/object/props'
import test from 'tape'

test('Grabs the requested values from the object', t => {
  const results = props(['a', 'b'], { a: 1, b: 2, c: 3 })

  t.deepEqual(results, [1, 2])
  t.end()
})

test('Is curried', t => {
  const g = props(['a', 'b'])

  t.deepEqual(g({ a: 1, b: 2, c: 3 }), [1, 2])
  t.end()
})

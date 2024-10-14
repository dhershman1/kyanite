import props from '../../src/object/props.js'
import test from 'tape'

test('props -- Grabs the requested values from the object', t => {
  const results = props(['a', 'b'], { a: 1, b: 2, c: 3 })

  t.deepEqual(results, [1, 2])
  t.end()
})

test('props -- Is curried', t => {
  const g = props(['a', 'b'])

  t.deepEqual(g({ a: 1, b: 2, c: 3 }), [1, 2])
  t.end()
})

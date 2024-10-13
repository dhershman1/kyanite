import dropLast from '../../src/array/dropLast.js'
import test from 'tape'

test('dropLast -- Handles dropping values', t => {
  const results = dropLast(3, [1, 2, 3, 4, 5])

  t.same(results, [1, 2])
  t.end()
})

test('dropLast -- Handles dropping values when number is larger than length', t => {
  const results = dropLast(6, [1, 2, 3, 4, 5])

  t.same(results, [])
  t.end()
})

test('dropLast -- Handles invalid data sets', t => {
  const results = dropLast(3, [])

  t.same(results, [])
  t.end()
})

test('dropLast -- Is curried', t => {
  const d = dropLast(3)

  t.same(d([1, 2, 3, 4, 5]), [1, 2])
  t.end()
})

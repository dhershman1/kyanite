import drop from '../src/drop'
import test from 'tape'

test('Handles dropping values', t => {
  const results = drop(3, [1, 2, 3, 4, 5])

  t.same(results, [4, 5])
  t.end()
})

test('Handles invalid data sets', t => {
  const results = drop(3, [])

  t.same(results, [])
  t.end()
})

test('Is curried', t => {
  const d = drop(3)

  t.same(d([1, 2, 3, 4, 5]), [4, 5])
  t.end()
})

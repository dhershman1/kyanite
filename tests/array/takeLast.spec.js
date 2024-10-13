import takeLast from '../../src/array/takeLast.js'
import test from 'tape'

test('takeLast -- Handles taking values from an array', t => {
  const results = takeLast(3, [1, 2, 3, 4, 5])

  t.same(results, [3, 4, 5])
  t.end()
})

test('takeLast -- Handles values if the number is bigger than the length', t => {
  const results = takeLast(7, [1, 2, 3, 4, 5])

  t.same(results, [1, 2, 3, 4, 5])
  t.end()
})

test('takeLast -- Handles taking values from a string', t => {
  const results = takeLast(3, '12345')

  t.same(results, '345')
  t.end()
})

test('takeLast -- Handles empty arrays passed in', t => {
  const results = takeLast(3, [])

  t.same(results, [])
  t.end()
})

test('takeLast -- Is curried', t => {
  const ta = takeLast(3)

  t.same(ta([1, 2, 3, 4, 5]), [3, 4, 5], 'curried result returned [3, 4, 5]')
  t.same(ta([]), [], 'curried result returned an empty array')
  t.end()
})

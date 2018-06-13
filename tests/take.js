import take from '../src/take'
import test from 'tape'

test('Handles taking values from an array', t => {
  const results = take(3, [1, 2, 3, 4, 5])

  t.same(results, [1, 2, 3])
  t.end()
})

test('Handles empty arrays passed in', t => {
  const results = take(3, [])

  t.same(results, [])
  t.end()
})

test('Is curried', t => {
  const ta = take(3)

  t.same(ta([1, 2, 3, 4, 5]), [1, 2, 3], 'curried result returned [1, 2, 3]')
  t.same(ta([]), [], 'curried result returned an empty array')
  t.end()
})

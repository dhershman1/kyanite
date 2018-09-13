import test from 'tape'
import compact from '../../src/array/compact'

test('compact -- Removes falsy values', t => {
  const results = compact([1, '', 0, 2])

  t.deepEqual(results, [1, 2])
  t.end()
})

test('compact -- Removes fully false values', t => {
  const results = compact([1, '', false, 2, undefined, 3, null])

  t.deepEqual(results, [1, 2, 3])
  t.end()
})

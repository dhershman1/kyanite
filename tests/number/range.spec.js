import range from '../../src/number/range.js'
import test from 'tape'

test('range -- Create basic range array', t => {
  const results = range(1, 5)

  t.ok(results)
  t.deepEqual(results, [1, 2, 3, 4])
  t.same(range(0, 0), [])
  t.end()
})

test('range -- Creates range from zero to five', t => {
  const results = range(0, 5)

  t.ok(results)
  t.deepEqual(results, [0, 1, 2, 3, 4])
  t.end()
})

test('range -- Handles string types', t => {
  t.same(range('1', 4), [1, 2, 3])
  t.same(range(1, '4'), [1, 2, 3])
  t.same(range('1', '4'), [1, 2, 3])
  t.end()
})

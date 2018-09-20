import range from '../../src/function/range'
import test from 'tape'

test('range -- Create basic range array', t => {
  const results = range(1, 5)

  t.ok(results)
  t.deepEqual(results, [1, 2, 3, 4])
  t.same(range(), [])
  t.end()
})

test('range -- Creates range while missing the first argument', t => {
  const results = range(5)

  t.ok(results)
  t.deepEqual(results, [0, 1, 2, 3, 4])
  t.end()
})

test('range -- Should throw an error when values are NaN', t => {
  try {
    range('h')
  } catch (err) {
    t.is(err.message, 'Arguments should be Numbers')
    t.end()
  }
})

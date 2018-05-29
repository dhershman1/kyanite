import range from '../src/range'
import test from 'tape'

test('Create basic range array', t => {
  const results = range(1, 5)

  t.ok(results)
  t.deepEqual(results, [1, 2, 3, 4])
  t.end()
})

test('Creates range while missing the first argument', t => {
  const results = range(5)

  t.ok(results)
  t.deepEqual(results, [0, 1, 2, 3, 4])
  t.end()
})

test('Should throw an error when values are NaN', t => {
  try {
    range('h')
  } catch (err) {
    t.is(err.message, 'Both Arguments should be a number type')
    t.end()
  }
})

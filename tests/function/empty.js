import empty from '../../src/function/empty'
import test from 'tape'

test('empty -- Test array functionality', t => {
  t.deepEqual(empty([1, 2, 3]), [])
  t.deepEqual(empty(['abc', 123, 'you and me']), [])
  t.end()
})

test('empty -- Test object functionality', t => {
  t.deepEqual(empty({ test: 1 }), {})
  t.deepEqual(empty({
    test: 1,
    nested: {
      again: 2
    }
  }), {})
  t.end()
})

test('empty -- Test string functionality', t => {
  t.is(empty('Empty this string!'), '')
  t.is(empty('123456789'), '')
  t.end()
})

test('empty -- Empty String', t => {
  const results = empty('Sweet little fox')

  t.is(results, '', 'The string is empty')
  t.end()
})

test('empty -- Empty an array', t => {
  const results = empty([1, 2, 3])

  t.is(results.length, 0, 'Array is empty')
  t.ok(Array.isArray(results), 'Array is still an array')
  t.end()
})

test('empty -- Empty an object', t => {
  const results = empty({
    test: 'an object',
    inner: {
      innerTest: 'this objects inner'
    }
  })

  t.ok(results, 'Got back results')
  t.deepEqual(results, {}, 'Results are an empty object')
  t.end()
})

test('empty -- Empty non complex', t => {
  t.notOk(empty(0))
  t.end()
})

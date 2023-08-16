import test from 'tape'
import zip from '../../src/array/zip.js'

test('zip -- Zipped even arrays', t => {
  const result = zip(['a', 'b', 'c'], [1, 2, 3])

  t.same(result, { a: 1, b: 2, c: 3 })
  t.end()
})

test('zip -- Zipped different length arrays', t => {
  const res1 = zip(['a', 'b', 'c'], [1, 2, 3, 4])
  const res2 = zip(['a', 'b', 'c'], [1, 2])

  t.same(res1, { a: 1, b: 2, c: 3 })
  t.same(res2, { a: 1, b: 2 })

  t.end()
})

test('zip -- It is curried', t => {
  const z = zip(['a', 'b', 'c'])

  t.same(z([1, 2, 3]), { a: 1, b: 2, c: 3 })
  t.same(z([1, 2, 3, 4]), { a: 1, b: 2, c: 3 })
  t.same(z([1, 2]), { a: 1, b: 2 })

  t.end()
})

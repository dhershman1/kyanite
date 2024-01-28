import test from 'tape'
import pick from '../../src/object/pick.js'

test('pick -- picks the requested keys', t => {
  const results = pick(['a', 'd'], {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  })

  t.same(results, { a: 1, d: 4 })
  t.end()
})

test('pick -- picks only the requested keys', t => {
  const results = pick(['a', 'e', 'f'], {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  })

  t.same(results, { a: 1 })
  t.end()
})

test('pick -- is curried', t => {
  const picker = pick(['a', 'd'])

  t.same(picker({ a: 1, b: 2, c: 3, d: 4 }), { a: 1, d: 4 })
  t.same(picker({ a: 1, b: 2, c: 3 }), { a: 1 })
  t.end()
})

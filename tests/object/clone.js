import clone from '../../src/object/clone'
import test from 'tape'

test('clone -- shallow clone object', t => {
  t.same(clone({ a: 1 }), { a: 1 })
  t.same(clone({ a: 1, b: 2, c: 3 }), { a: 1, b: 2, c: 3 })
  t.end()
})

test('clone -- deep clones object', t => {
  t.same(clone({ a: 1 }, true), { a: 1 })
  t.same(clone({ a: 1, b: 2, c: 3 }, true), { a: 1, b: 2, c: 3 })
  t.end()
})

test('clone -- deep clones array', t => {
  t.same(clone([1, 2, 3], true), [1, 2, 3])
  t.end()
})

test('clone -- Does not mutate objects by ref', t => {
  const obj = { a: 1, b: 2 }
  const tst = clone(obj)

  tst.a = 2

  t.same(obj, { a: 1, b: 2 })
  t.same(tst, { a: 2, b: 2 })
  t.end()
})

test('clone -- Does not mutate arrays by ref', t => {
  const arr = [1, 2, 3]
  const tst = clone(arr, true)

  tst[1] = 3

  t.same(arr, [1, 2, 3])
  t.same(tst, [1, 3, 3])
  t.end()
})

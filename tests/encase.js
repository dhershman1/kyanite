import encase from '../src/encase'
import test from 'tape'

const getter = x => x.a.b.c

test('Encases the function and returns undefined if fails', t => {
  const results = encase(getter, { a: 0 })

  t.notOk(results)
  t.same(results, undefined)
  t.end()
})

test('Encases the function and returns the functions returned value', t => {
  const results = encase(getter, { a: { b: { c: 0 } } })

  t.same(results, 0)
  t.end()
})

test('Is curried', t => {
  const en = encase(getter)

  t.same(en({ a: 0 }), undefined)
  t.same(en({ a: { b: { c: 0 } } }), 0)
  t.end()
})

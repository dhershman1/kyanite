import identical from '../../src/function/identical'
import test from 'tape'

test('identical -- Test base functionality', t => {
  t.ok(identical(0, 0))
  t.ok(identical('t', 't'))
  t.end()
})

test('identical -- Test boolean types', t => {
  t.ok(identical(false, false))
  t.ok(identical(true, true))
  t.notOk(identical(true, false))
  t.end()
})

test('identical -- Test object types', t => {
  const o = {}

  t.ok(identical(o, o))
  t.notOk(identical({ test: 1 }, { test: 1 }))
  t.notOk(identical({}, {}))
  t.notOk(identical({ test: 1 }, { test: 2 }))
  t.end()
})

test('identical -- Test array types', t => {
  t.notOk(identical([], []))
  t.notOk(identical([1], [1]))
  t.notOk(identical([1], [2]))
  t.end()
})

test('identical -- Test edge case type', t => {
  t.notOk(identical(0, -0))
  t.ok(identical(NaN, NaN))
  t.end()
})

test('identical -- Test curried identical', t => {
  const i = identical(NaN)

  t.ok(i(NaN))
  t.notOk(i({}))
  t.notOk(i(0))
  t.end()
})

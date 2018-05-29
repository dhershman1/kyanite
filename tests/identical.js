import identical from '../src/identical'
import test from 'tape'

test('Test base functionality', t => {
  t.ok(identical(0, 0))
  t.ok(identical('t', 't'))
  t.end()
})

test('Test object types', t => {
  const o = {}

  t.ok(identical(o, o))
  t.notOk(identical({ test: 1 }, { test: 1 }))
  t.notOk(identical({}, {}))
  t.notOk(identical({ test: 1 }, { test: 2 }))
  t.end()
})

test('Test array types', t => {
  t.notOk(identical([], []))
  t.notOk(identical([1], [1]))
  t.notOk(identical([1], [2]))
  t.end()
})

test('Test edge case type', t => {
  t.notOk(identical(0, -0))
  t.ok(identical(NaN, NaN))
  t.end()
})

test('Test curried identical', t => {
  const i = identical(NaN)

  t.ok(i(NaN))
  t.notOk(i({}))
  t.notOk(i(0))
  t.end()
})
